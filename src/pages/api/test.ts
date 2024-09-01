// import type { NextApiRequest, NextApiResponse } from "next";
// import { createRouter, expressWrapper } from "next-connect";
// import cors from "cors";

// const router = createRouter<NextApiRequest, NextApiResponse>();

// router
//   // Use express middleware in next-connect with expressWrapper function
//   .use(expressWrapper(passport.session()))
//   // A middleware example
//   .use(async (req, res, next) => {
//     const start = Date.now();
//     await next(); // call next in chain
//     const end = Date.now();
//     console.log(`Request took ${end - start}ms`);
//   })
//   .get((req, res) => {
//     const user = getUser(req.query.id);
//     res.json({ user });
//   })
//   .put((req, res) => {
//     if (req.user.id !== req.query.id) {
//       throw new ForbiddenError("You can't update other user's profile");
//     }
//     const user = await updateUser(req.body.user);
//     res.json({ user });
//   });

// export const config = {
//   runtime: "edge",
// };

// export default router.handler({
//   onError: (err, req, res) => {
//     console.error(err.stack);
//     res.status(err.statusCode || 500).end(err.message);
//   },
// });

// Next.js Edge API Routes

// next-connect can be used in Edge API Routes

// // pages/api/user/[id].ts
// import type { NextFetchEvent, NextRequest } from "next/server";
// import { createEdgeRouter } from "next-connect";
// import cors from "cors";

// const router = createEdgeRouter<NextRequest, NextFetchEvent>();

// router
//   // A middleware example
//   .use(async (req, event, next) => {
//     const start = Date.now();
//     await next(); // call next in chain
//     const end = Date.now();
//     console.log(`Request took ${end - start}ms`);
//   })
//   .get((req) => {
//     const id = req.nextUrl.searchParams.get("id");
//     const user = getUser(id);
//     return NextResponse.json({ user });
//   })
//   .put((req) => {
//     const id = req.nextUrl.searchParams.get("id");
//     if (req.user.id !== id) {
//       throw new ForbiddenError("You can't update other user's profile");
//     }
//     const user = await updateUser(req.body.user);
//     return NextResponse.json({ user });
//   });

// export default router.handler({
//   onError: (err, req, event) => {
//     console.error(err.stack);
//     return new NextResponse("Something broke!", {
//       status: err.statusCode || 500,
//     });
//   },

// });

