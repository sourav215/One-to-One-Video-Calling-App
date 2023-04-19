import { useParams } from "react-router-dom";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { Box, Text } from "@chakra-ui/react";

function Room() {
  const { roomID } = useParams();
  const myMeeting = async (element) => {
    const appID = 1819182195;
    const serverSecret = "6990cdd2f3f627675253dbd588ddf86d";
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      "Sourav Jana"
    );
    const zp = ZegoUIKitPrebuilt.create(kitToken);
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          name: 'Copy link',
          url:
           window.location.protocol + '//' +
           window.location.host + window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.OneONoneCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      showScreenSharingButton: true,
    });
  };
  return (
    <Box bg={"gray.50"} h={"100vh"}>
        <Box padding={"10"} >
            <Text fontSize={"2xl"} fontWeight={"semibold"}>Room ID : {roomID}</Text>
        </Box>
        <Box ref={myMeeting}/>
    </Box>
    // <div>
    //   <h1>Room</h1>
    //   <h2>Room Id : {roomID}</h2>
    //   {/* <div ref={myMeeting}/> */}
    // </div>
  );
}
export default Room;
