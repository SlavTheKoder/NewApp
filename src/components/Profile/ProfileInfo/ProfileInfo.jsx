import s from './ProfileInfo.module.css';
const ProfileInfo = () => {
  return (
    <div>
      <div>
        <img
          src="https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg"
          className={s.logo}
        ></img>
      </div>
      <div className={s.profileBlock}>ava + description</div>
    </div>
  );
};
export default ProfileInfo;
