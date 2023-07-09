import {NavLink} from 'react-router-dom';
import s from './Dialogs.module.css';

const DialogItem = (props) => {
  let path = '/dialogs/' + props.id;
  return (
    <div className={s.dialog + '' + s.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

const Message = (props) => {
  return <div className={s.dialog}>{props.message}</div>;
};

const Dialogs = (props) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name="Valeriy" id="1" />
        <DialogItem name="EvilArthas" id="2" />
        <DialogItem name="TorontoTokyo" id="3" />
        <DialogItem name="BadComedian" id="4" />
        <DialogItem name="Solo from 9Pandas" id="4" />
        <DialogItem name="Ramzes 666" id="5" />
        <DialogItem name="Gabe Neuwell" id="6" />
      </div>
      <div className={s.messages}>
        <Message message="This is fine..." />
        <Message message="KK" />
        <Message message="qq how are you?" />
      </div>
    </div>
  );
};

export default Dialogs;
