import Plus from "../icons/Plus";

const HeroSection = () => {
    return (
        <section>
        <div className="flex flex-col justify-between mt-4 bg-black/10 bg-blend-multiply rounded-3xl h-80 overflow-hidden bg-cover bg-center px-7 pt-4 pb-6 text-white" style={{"backgroundImage":"url('action-movie.png')"}}>
            <div className="bg-gradient-to-r from-black/30 to-transparent -mx-7 -mb-6 px-7 pb-6 pt-44">
            <span className="uppercase text-3xl font-semibold drop-shadow-lg ">Inception</span>
            <div className="text-xs text-gray-200 mt-2">
                <a href="#" className>Action</a>,
                <a href="#" className>Adventure</a>,
                <a href="#" className>Sci-Fi</a>
            </div>
            <div className="mt-4 flex space-x-3 items-center">
                <a href="#" className="px-5 py-2.5 bg-red-600 hover:bg-red-700 rounded-lg text-xs inline-block">Watch</a>
                <a href="#" className="p-2.5 bg-gray-800/80 rounded-lg hover:bg-red-600">
                <Plus />
                </a>
            </div>
            </div>
        </div>
        </section>
    );
};

export default HeroSection;