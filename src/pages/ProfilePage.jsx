import Profile from "../assets/profile.png";
import Cam from "../assets/cam.svg";

const ProfilePage = () => {
  return (
    <>
        <nav className='shadow-md'>
            Account Settings
        </nav>

        <article className="flex items-start justify-start gap-5">
            <div className="relative">
                <img src={Profile} alt="profile" />
                <img className="absolute bottom-0 right-0" src={Cam} alt="change-profile" />
            </div>

            <div>
                <h5 className="font-semibold">Marry Doe</h5>
                <p>Marry@Gmail.Com</p>
            </div>
        </article>

        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
            Labore fuga tempore eum veritatis consequatur ea quaerat 
            esse eos voluptatem ex!
        </p>
    </>
  )
}

export default ProfilePage