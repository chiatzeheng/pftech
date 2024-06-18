// import Login from "@/components/auth/login";
// import Register from "@/components/auth/register";
// import { X } from "@tamagui/lucide-icons";
// import {
//   Adapt,
//   Button,
//   Dialog,
//   Sheet,
//   View,
//   XStack,
//   Unspaced,
//   useTheme,
//   YStack,
// } from "tamagui";

// const Index = () => {
//   const theme = useTheme();
//   return (
//     <YStack gap="$4" f={1} ai={"center"} jc={"center"} bg={theme.red10}>
//       <Dialog modal>
//         <Dialog.Trigger asChild>
//           <Button w={"$20"}>Login </Button>
//         </Dialog.Trigger>
//         <Adapt when="sm" platform="touch">
//           <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
//             <Sheet.Frame padding="$4" gap="$4">
//               <Adapt.Contents />
//             </Sheet.Frame>
//             <Sheet.Overlay
//               animation="lazy"
//               enterStyle={{ opacity: 0 }}
//               exitStyle={{ opacity: 0 }}
//             />
//           </Sheet>
//         </Adapt>
//         <Dialog.Portal>
//           <Dialog.Overlay
//             key="overlay"
//             animation="slow"
//             opacity={0.5}
//             enterStyle={{ opacity: 0 }}
//             exitStyle={{ opacity: 0 }}
//           />
//           <Dialog.Content
//             bordered
//             elevate
//             key="content"
//             animateOnly={["transform", "opacity"]}
//             animation={[
//               "quicker",
//               {
//                 opacity: {
//                   overshootClamping: true,
//                 },
//               },
//             ]}
//             enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
//             exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
//             gap="$4"
//           >
//             <Dialog.Title>Login</Dialog.Title>
//             <Dialog.Description>
//               Please enter your credentials to log in.
//             </Dialog.Description>

//             <Login />

//             <XStack alignSelf="flex-end" gap="$4">
//               <Dialog.Close displayWhenAdapted asChild>
//                 <Button theme="active" aria-label="Close">
//                   Close
//                 </Button>
//               </Dialog.Close>
//             </XStack>
//             <Unspaced>
//               <Dialog.Close asChild>
//                 <Button
//                   position="absolute"
//                   top="$3"
//                   right="$3"
//                   size="$2"
//                   circular
//                   icon={X}
//                 />
//               </Dialog.Close>
//             </Unspaced>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog>

//       <Dialog modal>
//         <Dialog.Trigger asChild>
//           <Button w={"$20"}>Register </Button>
//         </Dialog.Trigger>
//         <Adapt when="sm" platform="touch">
//           <Sheet animation="medium" zIndex={200000} modal dismissOnSnapToBottom>
//             <Sheet.Frame padding="$4" gap="$4">
//               <Adapt.Contents />
//             </Sheet.Frame>
//             <Sheet.Overlay
//               animation="lazy"
//               enterStyle={{ opacity: 0 }}
//               exitStyle={{ opacity: 0 }}
//             />
//           </Sheet>
//         </Adapt>
//         <Dialog.Portal>
//           <Dialog.Overlay
//             key="overlay"
//             animation="slow"
//             opacity={0.5}
//             enterStyle={{ opacity: 0 }}
//             exitStyle={{ opacity: 0 }}
//           />
//           <Dialog.Content
//             bordered
//             elevate
//             key="content"
//             animateOnly={["transform", "opacity"]}
//             animation={[
//               "quicker",
//               {
//                 opacity: {
//                   overshootClamping: true,
//                 },
//               },
//             ]}
//             enterStyle={{ x: 0, y: -20, opacity: 0, scale: 0.9 }}
//             exitStyle={{ x: 0, y: 10, opacity: 0, scale: 0.95 }}
//             gap="$4"
//           >
//             <Dialog.Title>Register</Dialog.Title>
//             <Dialog.Description>
//               Please enter your details to register.
//             </Dialog.Description>

//             <Register />

//             <XStack alignSelf="flex-end" gap="$4">
//               <Dialog.Close displayWhenAdapted asChild>
//                 <Button theme="active" aria-label="Close">
//                   Close
//                 </Button>
//               </Dialog.Close>
//             </XStack>
//             <Unspaced>
//               <Dialog.Close asChild>
//                 <Button
//                   position="absolute"
//                   top="$3"
//                   right="$3"
//                   size="$2"
//                   circular
//                   icon={X}
//                 />
//               </Dialog.Close>
//             </Unspaced>
//           </Dialog.Content>
//         </Dialog.Portal>
//       </Dialog>
//     </YStack>
//   );
// };

// export default Index;

// When db is implemented

import { Redirect } from "expo-router";

const Index = () => {
  return <Redirect href={"/(tabs)/home/page"} />;
};

export default Index;
