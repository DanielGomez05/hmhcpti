import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { type NextRequest, NextResponse } from 'next/server';

const isOnboardingRoute = createRouteMatcher(['/onboarding']);
const isPublicRoute = createRouteMatcher(['/', '/sign-in(.*)', '/sign-up(.*)']);

export default clerkMiddleware(async (auth, req: NextRequest) => {
  const { userId, sessionClaims, redirectToSignIn } = await auth();

  const onboardingComplete = sessionClaims?.metadata?.onboardingComplete === true;

  // ✅ 1. Si está en /onboarding pero ya lo completó, redirige a /data-records/welcome
  if (userId && isOnboardingRoute(req) && onboardingComplete) {
    return NextResponse.redirect(new URL('/data-records/welcome', req.url));
  }

  // ✅ 2. Si no está autenticado y no es pública, redirige a login
  if (!userId && !isPublicRoute(req)) {
    return redirectToSignIn({ returnBackUrl: req.url });
  }

  // ✅ 3. Si está autenticado pero NO ha completado el onboarding, redirige a onboarding
  if (userId && !onboardingComplete && !isOnboardingRoute(req)) {
    return NextResponse.redirect(new URL('/onboarding', req.url));
  }

  // ✅ 4. Si todo está bien, permite pasar
  return NextResponse.next();
});

export const config = {
  matcher: [
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    '/(api|trpc)(.*)',
  ],
};
