import React from "react";
import { useParams } from "react-router-dom";
import {ZegoUIKitPrebuilt} from '@zegocloud/zego-uikit-prebuilt'

const RoomPage = () => {
    const { roomId } = useParams();

    const myMeeting = async(element) => {
        const appId = 1600688645
        const serverSecret = "b9384adfe258179722a57096348a0f8c"
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(appId, serverSecret, roomId, Date.now().toString(), "PrakharCool")
    const zc = ZegoUIKitPrebuilt.create(kitToken)
    zc.joinRoom({
        container: element,
        sharedLinks: [{ 
            name: "CopyLink",
            link: "https://localhost:3000/room/{roomId}"
        }
        ],
        scenario: {
            mode: ZegoUIKitPrebuilt.OneONoneCall
        }
    })
}
    return(
        
        <div ref={myMeeting} />
    )
}

export default RoomPage;