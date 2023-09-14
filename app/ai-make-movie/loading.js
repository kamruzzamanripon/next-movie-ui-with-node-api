import Image from 'next/image';

const loading = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <h3 className="font-semibold text-3xl text-red-500 absolute top-5 left-6 absolute top-3/4 left-[28%]">
                wait....., I am going to the director to make this movie.
            </h3>
            
            <Image
                src="/bird-wings-flying-feature.gif" 
                alt="Bird flying animation" 
            />
        </div>
    );
};


export default loading;