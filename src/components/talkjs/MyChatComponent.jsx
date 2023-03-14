// import Talk from 'talkjs';
// import { useEffect, useState, useRef, useContext } from 'react';
// import { AuthContext } from '../../context/auth.context';

// function MyChatComponent({plan: {_id, title, images}}) {
//   const chatboxEl = useRef(); 
//   const { user } = useContext(AuthContext);

//   // wait for TalkJS to load
//   const [talkLoaded, setTalkLoaded] = useState(false);
  
//   Talk.ready
//   .then(result =>{
//     setTalkLoaded(true)

//   })

//   useEffect(() => {
//     const plans = new Talk.User({
//       id: _id,
//       title: title,
//       images: images,
//       role: 'default'
//     });

//     if (talkLoaded) {
//       Talk.ready.then(() => {
//         const session = new Talk.Session({
//           appId: 'tvpgd6F1',
//           me: plans,
//         });

//         const currentUser = new Talk.User({
//           id: user._id,
//           name: 'Henry Mill 3',
//           email: 'henrymill@example.com',
//           photoUrl: 'henry.jpeg',
//           welcomeMessage: 'Hello!',
//           role: 'default',
//         });
//         // const ChatId = Talk.oneOnOneId(currentUser, plans)
//         const conversation = session.getOrCreateConversation(_id);
//         conversation.setParticipant(currentUser);
//         conversation.setParticipant(plans);
//         conversation.setAttributes({
//           photoUrl: 'https://picsum.photos/200/300',
//           subject: 'plan1'
//         });

//         const chatbox = session.createChatbox();
//         chatbox.select(conversation);
//         chatbox.mount(chatboxEl.current);

//         return () => session.destroy();
//       });
//     }
//   }, [talkLoaded]);

//   return <div className='chatLive' ref={chatboxEl} />;
// }

// export default MyChatComponent;
import Talk from 'talkjs';
import { useEffect, useState, useRef, useContext } from 'react';
import { AuthContext } from '../../context/auth.context';

function MyChatComponent({plan: {_id, title, images}}) {
  const chatboxEl = useRef(); 
  const { user } = useContext(AuthContext);

  // wait for TalkJS to load
  const [talkLoaded, setTalkLoaded] = useState(false);
  
  Talk.ready
  .then(result =>{
    setTalkLoaded(true)

  })

  useEffect(() => {
    const plans = new Talk.User({
      id: _id,
      name: title,
      email: 'hola@hola.com',
      photoUrl: images[0],
      role: 'default'
    });

    if (talkLoaded) {
      Talk.ready.then(() => {
        const session = new Talk.Session({
          appId: 'tvpgd6F1',
          me: plans,
        });

        const currentUser = new Talk.User({
          id: user._id,
          name: user.username,
          email: user.email,
          photoUrl: user.images,
          welcomeMessage: 'Hello!',
          role: 'default',
        });

        const conversation = session.getOrCreateConversation(_id);
        conversation.setParticipant(currentUser);
        conversation.setParticipant(plans);
        conversation.setAttributes({
          photoUrl: images[0],
          subject: title
        });

        const chatbox = session.createChatbox();
        chatbox.select(conversation);
        chatbox.mount(chatboxEl.current);

        return () => session.destroy();
      });
    }
  }, [talkLoaded]);

  return <div className='chatLive' ref={chatboxEl} />;
}

export default MyChatComponent;
