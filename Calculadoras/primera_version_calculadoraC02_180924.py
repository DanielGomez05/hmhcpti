from pyspark import SparkContext
from pyspark.sql import SparkSession
import math
sc = SparkContext()
sesion = SparkSession.builder.getOrCreate()
from pyspark.sql.functions import col
from pyspark.sql.functions import col, when, sum as pyspark_sum
from pyspark.sql import Row
import re
direccion = 'programa.csv'

#archivo ya es un dataframe
archivo = sesion.read.option('header', 'true')\
                        .option('delimiter', ',')\
                        .option('interSchema','true')\
                        .csv(direccion)
#print(archivo)
#Pero acá abajo ya es lista
archivo.show() 
# from pyspark.sql.functions import col, when, sum as pyspark_sum
factor_emision = 0.438

# Función para validar la IP
def validar_ip(ip_str):
    partes = ip_str.split('.')
    if len(partes) != 4:
        return False
    for parte in partes:
        if not parte.isdigit():
            return False
        if not 0 <= int(parte) <= 255:
            return False
    return True

# Función para validar la MAC en formato XX-XX-XX-XX-XX-XX
def validar_mac(mac_str):
    patron_mac = re.compile(r'^([0-9A-Fa-f]{2}-){5}([0-9A-Fa-f]{2})$')
    return bool(patron_mac.match(mac_str))

rsp = input("¿Desea especificar los componentes de las computadoras del proyecto (si/no)?\nSerá necesario que conozaca el consumo eléctrico de los siguientes componentes de las computadoras: procesador, la tarjeta gráfica, memoria RAM y almacenamiento\n")

if rsp == "no":  # Iterar sobre cada producto en el DataFrame y solicitar la nueva cantidad
    # Actualizar la cantidad de cada producto
    for row in archivo.collect():
        inventario = row['Inventario']  # Obtener el nombre del producto
        nueva_cantidad = input(f"Ingresa cuántos(as) {inventario} tiene tu proyecto: ")
        archivo = archivo.withColumn("Cantidad", when(col("Inventario") == inventario, int(nueva_cantidad)).otherwise(col("Cantidad")))
    
    archivo.show()

    # Actualizar las horas de funcionamiento de cada producto
    for row in archivo.collect():
        inventario = row['Inventario']
        nuevas_horas = input(f"Ingresa las horas de funcionamiento para {inventario}: ")
        archivo = archivo.withColumn("Horas_de_funcionamiento", when(col("Inventario") == inventario, float(nuevas_horas)).otherwise(col("Horas_de_funcionamiento")))

    archivo.show()

    # Calcular el consumo de energía
    Consumo_de_energia = archivo.withColumn("Consumo_de_energia", (archivo["Potencia_(W)"] * archivo["Horas_de_funcionamiento"]) * archivo["Cantidad"])
    Consumo_de_energia.show()

    # Convertir el consumo a kWh
    Consumo_de_energia_kilos = Consumo_de_energia.withColumn("Consumo_de_energia_kilos", Consumo_de_energia["Consumo_de_energia"] / 1000)
    Consumo_de_energia_kilos.show()

    # Sumar el consumo total
    sumatoria_Consumo_de_energia = Consumo_de_energia_kilos.select(pyspark_sum("Consumo_de_energia_kilos")).collect()
    total_consumo_energia = sumatoria_Consumo_de_energia[0][0]

    # Calcular las emisiones del proyecto
    Emision_proyecto = total_consumo_energia * factor_emision
    print(f"Tu empresa emite aproximadamente: {Emision_proyecto} toneladas de CO2 anuales")

    # Semáforo de emisiones
    if Emision_proyecto <= 10:
        print("Felicidades! tu proyecto se encuentra en el nivel verde de nuestro semáforo, sigue así!")
    elif 10 < Emision_proyecto <= 25:
        print("El proyecto se encuentra en el nivel amarillo, checa las siguientes recomendaciones")
    else:
        print("El proyecto se encuentra en el nivel rojo! Cambia estos aspectos urgentemente!!")

elif rsp == "si":  # Caso para componentes de computadoras
    consumo_procesadores = {}
    consumo_tarjetas = {}
    consumo_ram = {}
    consumo_almacenamiento = {}
    ip = {}
    mac = {}

    computadoras = []
    
    # Pedir el número de computadoras
    num_compus = int(input("¿Cuántas computadoras utiliza el proyecto? "))

    # Recopilar el consumo de cada componente por computadora
    for i in range(1, num_compus + 1):
        print(f"\nComputadora {i}:")
         # Validar entrada de IP
        while True:
            ip_input = input("Digite la IP de la computadora (formato: XXX.XXX.XXX.XXX): ")
            if validar_ip(ip_input):
                ip[i] = ip_input
                break
            else:
                print("Dirección IP no válida. Por favor, inténtelo de nuevo.")
        
        # Validar entrada de MAC
        while True:
            mac_input = input("Digite la MAC de la computadora (formato: XX-XX-XX-XX-XX-XX): ")
            if validar_mac(mac_input):
                mac[i] = mac_input
                break
            else:
                print("Dirección MAC no válida. Por favor, inténtelo de nuevo.")
        
        consumo_procesadores[i] = float(input("Consumo del procesador (en kWh): "))
        consumo_tarjetas[i] = float(input("Consumo de la tarjeta gráfica (en kWh): "))
        consumo_ram[i] = float(input("Consumo de la memoria RAM (en kWh): "))
        consumo_almacenamiento[i] = float(input("Consumo del almacenamiento (en kWh): "))

        # Agregar la computadora al listado
        computadoras.append(Row(
            identificador=i,  # Aquí usas 'i' como identificador
            ip=ip[i],
            mac=mac[i],
            consumo_procesador=consumo_procesadores[i],
            consumo_tarjeta=consumo_tarjetas[i],
            consumo_ram=consumo_ram[i],
            consumo_almacenamiento=consumo_almacenamiento[i]
        ))

    # Crear un DataFrame de PySpark para las computadoras
    df_computadoras = sesion.createDataFrame(computadoras)

    # Mostrar el DataFrame de las computadoras
    df_computadoras.show()
    

    # Calcular el consumo total por computadora
    consumo_total_computadoras = sum(consumo_procesadores.values()) + sum(consumo_tarjetas.values()) + sum(consumo_ram.values()) + sum(consumo_almacenamiento.values())
    print(f"El consumo total por las computadoras es: {consumo_total_computadoras} kWh")

    # Actualizar la columna 'Potencia_(W)' en el DataFrame para las computadoras
    archivo = archivo.withColumn("Potencia_(W)", when(col("Inventario") == "Computadoras", consumo_total_computadoras).otherwise(col("Potencia_(W)")))

    archivo.show()

    # Solicitar la cantidad de otros productos en el inventario
    for row in archivo.filter(col("Inventario") != "Computadoras").collect():
        inventario = row['Inventario']
        nueva_cantidad = input(f"Ingresa cuántos(as) {inventario} tiene tu proyecto: ")
        archivo = archivo.withColumn("Cantidad", when(col("Inventario") == inventario, int(nueva_cantidad)).otherwise(col("Cantidad")))

    archivo.show()

    # Solicitar las horas de funcionamiento de otros productos en el inventario
    for row in archivo.collect():
        inventario = row['Inventario']
        nuevas_horas = input(f"Ingresa las horas de funcionamiento para {inventario}: ")
        archivo = archivo.withColumn("Horas_de_funcionamiento", when(col("Inventario") == inventario, float(nuevas_horas)).otherwise(col("Horas_de_funcionamiento")))

    archivo.show()

    # Calcular el consumo de energía
    Consumo_de_energia = archivo.withColumn("Consumo_de_energia", (archivo["Potencia_(W)"] * archivo["Horas_de_funcionamiento"]) * archivo["Cantidad"])
    Consumo_de_energia.show()

    # Convertir el consumo a kWh
    Consumo_de_energia_kilos = Consumo_de_energia.withColumn("Consumo_de_energia_kilos", Consumo_de_energia["Consumo_de_energia"] / 1000)
    Consumo_de_energia_kilos.show()

    # Sumar el consumo total
    sumatoria_Consumo_de_energia = Consumo_de_energia_kilos.select(pyspark_sum("Consumo_de_energia_kilos")).collect()
    total_consumo_energia = sumatoria_Consumo_de_energia[0][0]

    # Calcular las emisiones del proyecto
    Emision_proyecto = total_consumo_energia * factor_emision
    print(f"Tu empresa emite aproximadamente: {Emision_proyecto} toneladas de CO2 anuales")

    # Semáforo de emisiones
    if Emision_proyecto <= 10:
        print("Felicidades! tu proyecto se encuentra en el nivel verde de nuestro semáforo, sigue así!")
    elif 10 < Emision_proyecto <= 25:
        print("El proyecto se encuentra en el nivel amarillo, checa las siguientes recomendaciones")
    else:
        print("El proyecto se encuentra en el nivel rojo! Cambia estos aspectos urgentemente!!")
