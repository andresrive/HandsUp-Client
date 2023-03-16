import Talk from 'talkjs';
import { useEffect, useState, useRef, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';


function MyChatComponent({ plan }) {
  const chatboxEl = useRef();
  const { user } = useContext(AuthContext);
  console.log(user)

  // wait for TalkJS to load
  const [talkLoaded, setTalkLoaded] = useState(false);

  Talk.ready
    .then(result => {
      setTalkLoaded(true)

    })
  useEffect(() => {
    const creator = new Talk.User({
      id: user._id,
      name: user.username,
      email: user.email,
      photoUrl: user.images,
      welcomeMessage: 'Hello!',
    });
    console.log("PLAN AUTHOR ID", plan.author._id)
    if (talkLoaded) {
      Talk.ready.then(() => {
        window.talkSession = new Talk.Session({
          appId: "tvpgd6F1",
          me: creator
        })

        const people = plan.participants.map(participant => {
          return new Talk.User({
            id: participant._id,
            name: participant.username,
            email: participant.email,
            photoUrl: participant.images,
          });
        });

        const conversation = window.talkSession.getOrCreateConversation(plan._id);
        people.forEach(participant => {
          conversation.setParticipant(participant);
        });
        conversation.setAttributes({
          photoUrl: plan.images[0],
          subject: plan.title
        });

        const chatbox = window.talkSession.createChatbox();
        chatbox.select(conversation);
        chatbox.mount(chatboxEl.current);

        return () => window.talkSession.destroy();
      });
    } // eslint-disable-next-line
  }, [talkLoaded, plan]);

  return <div className='chatLive' ref={chatboxEl} />;
}

export default MyChatComponent;

