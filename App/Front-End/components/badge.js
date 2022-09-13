import SocialIcons from "./socialicons"

function Badge() {
    return (
        <div className="container mx-auto px-4 sm:px-6 grid place-items-center h-screen h-max-screen">
            <div className="rounded-md shadow-lg border-white border-solid border">
                <div className="md:flex px-4 leading-none max-w-4xl">
                    <div className="flex-none ">
                        <img
                            src="https://creativereview.imgix.net/content/uploads/2019/12/joker_full.jpg?auto=compress,format&q=60&w=1012&h=1500"
                            alt="pic"
                            className="h-72 w-56 rounded-md shadow-2xl transform -translate-y-4 border-4 border-gray-300"
                        />
                    </div>

                    <div className="flex-col dark:text-white px-5">
                        <p className="pt-4 text-2xl font-bold">#BADGE_N0</p>
                        <hr className="hr-text" data-content="" />
                        <div className="text-md flex justify-between my-2">
                            <span className="font-bold">+254 71X XXX XXX</span>
                            <span className="font-bold"></span>
                        </div>
                        <p className="hidden md:block my-4 text-sm text-left">In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: the Joker. </p>

                        <p className="flex text-md my-2">
                            Rating: 9.0/10
                            <span className="font-bold px-2">|</span>
                            Mood: Dark
                        </p>

                        <div className="text-xs flex gap-3">
                        <SocialIcons />
                        </div>
                    </div>
                </div>
                <div className="flex justify-between items-center px-4 mb-4 w-full dark:text-white">
                    <div className="flex">
                        <p className="">
                            MakerBadge
                        </p>
                    </div>
                    <div className="flex">
                        1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Badge