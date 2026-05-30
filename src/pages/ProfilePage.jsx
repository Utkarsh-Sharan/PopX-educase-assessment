import Profile from "../assets/profile.png";
import Cam from "../assets/cam.svg";

const ProfilePage = () => {
  return (
    <>
        <nav className='absolute top-0 left-0 w-full bg-white px-2 py-4 shadow-md'>
            Account Settings
        </nav>

        <article className="mt-16 flex flex-col gap-2">
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
        </article>
    </>
  )
}

export default ProfilePage