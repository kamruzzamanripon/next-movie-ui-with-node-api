'use client';
import { aiMovieData } from '@/app/reduxStore/features/movie/movieSlice';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Configuration, OpenAIApi } from 'openai';
import { useState } from "react";
import { useDispatch } from 'react-redux';
import Loading from '../../ai-make-movie/loading';


const AiFormInput = () => {
  const [aiIdea, setAiIdea] = useState();
  const dispatch = useDispatch();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  //Ai configuration
  const openAiApiKey = process.env.NEXT_PUBLIC_OPEN_AI_API_KEY;
  const configuration = new Configuration({
      apiKey: openAiApiKey
  })
  const openAi = new OpenAIApi(configuration);

  //Ai form submit handle
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const aiSampleMovieData = await fetchSynopsis(aiIdea)
    dispatch(aiMovieData(aiSampleMovieData));
    //console.log('form submit', data)
      
   router.push("/movie-made")
    
  };

  async function fetchSynopsis(outline){
    const response = await openAi.createCompletion({
        model: 'text-davinci-003',
        prompt:`Generate an engaging, professional and marketable movie synopsis based on an outline. The synopsis should include actiors names in brackets after each character. Choose actors that would be ideal for this role.
        ###
        outline: A big-headed daredevil fighter pilot goes back to school only to be sent on a deadly mission.
        synopsis: The Top Gun Naval Fighter Weapons School is where the best of the best train to refine their elite flying skills, When hotshot fighter pilot Maverick (Tom Cruise) is sent o the school, his rackless attitude and cocky demeanor put him at odds with the other pilots, especially the cool and collected Iceman (Val kilmer). But Maverick ins't only competing to be the top fighter pilot, he's also fighting for the attention of his beautiful flight instructor, Charlotte Blackwood (kelly McGillis). Maverick gradually earns the respect of his intructors and peers - and also the love of Charlotte, but struggles to balance his personal and professional life. As the pilots prepare for a mission against a foreign enemy, Maverick must confront his own demons and overcome the tragedies rooted deep in his past to become the best fighter pilot and return from the mission triumphant.
        ###
        outline: ${outline}
        synopsis:
        `,
        max_tokens: 700
    })
    const synopsis = response.data.choices[0].text.trim();
    console.log('fetchSynopsis', synopsis)
    const aiMovieData = fetchTitle(synopsis);
    return aiMovieData;
    
}

async function fetchTitle(synopsis){
    const response = await openAi.createCompletion({
        model: 'text-davinci-003',
        prompt:`Generate a catchy movie title for this synopsis: ${synopsis}`,
        max_tokens: 25,
        temperature: 0.7
    })
    const title = response.data.choices[0].text.trim();
    console.log('fetchTitle-1', synopsis)
    console.log('fetchTitle-2', title)
    const aiMovieData = fetchImagePromt(title, synopsis)
    return aiMovieData;
}


async function fetchImagePromt(title, synopsis){
    const response = await openAi.createCompletion({
    model: 'text-davinci-003',
    prompt: `Give a short description of an image which could be used to advertise a movie based on a title and synopsis.The description should be rich in visual detail but contain no names.
    ###
    title: Love's Time Warp
    synopsis: When scientist and time traveller Wendy (Emma Watson) is sent back to the 1920s to assassinate a future dictator, she never expected to fall in love with them. As wendy infiltrates the dictator's inner circle, she soon finds herself torn between her mission and her growing feelings for the leader (Brie Larson). With the help of a mysterious stranger from the future (Josh Brolin), Wendy must decide whether to carry out her mission or follow her heart. But the choices she makes in the 1920s will have far-reaching consequences that reverberate throuugh the ages.
    image description: A silhouetted figure stands in the shadows of a 1920s speakeasy, her face turned away from the camera. In the background, two people are dancing in the dim light, one wearing a flapper-style dress and the other wearing a dapper suit. A semi-transparent image of war is super-imposed over the scene.
    ###
    title: zero Earth
    synopsis: When baodyguard kob (Daniel Radcliffe) is recruited by the United Nations to save Planet Earth from the sinister Simm (John Malkovich), an alien lord with a plan to take over the world, he reluctantly accepts the challenge, With the help of this loyal sidekick, a brave and resourceful hamster named Gizmo (Gaten Matarazzo), Kob embarks on a perilous mission to destroy Simm. Along the way, he discovers a newfound courage and strength as he battles Simms's merciless forces. With the fate of the world in his hands, kob must find a way to defeat the alien lord and save the planet.
    image description: A tired and bloodied bodyguard and hamster standing a top a tall skyscraper, looking out over a vibrant cityscape, with a rainbow in the sky above them.
    ###
    title: ${title}
    synopsis: ${synopsis}
    image description:
    `,
    temperature: 0.8,
    max_tokens: 100

    })
    console.log('fetchImagePromt-1', synopsis)
    console.log('fetchImagePromt-2', title)
    const aiMovieData = fetchImageUrl(response.data.choices[0].text.trim(), synopsis, title)
    return aiMovieData;
}

async function fetchImageUrl(imagePrompt,synopsis,title){
    const response = await openAi.createImage({
        prompt: `${imagePrompt}. There should be no text in this iamge.`,
        n: 1,
        size: '256x256',
        response_format: 'b64_json'
    })
    const b64JsonImage = response.data.data[0];
    console.log('fetchImageUrl-1', synopsis)
    console.log('fetchImageUrl-2', title)
     const aiMovieData ={
        b64JsonImage,
        synopsis,
        title
    }

    return aiMovieData;
}

  if(loading){
    return <Loading/>
  }
  
  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div className="bg-gray-200 p-5 rounded-md dark:bg-black">
        <div className="text-center mb-8 relative">
          <h1 className="text-2xl font-bold text-gray-700 mb-3 dark:text-white">
            Hello, I am here to help Make Movie
          </h1>
          <p className="dark:text-white">
            Please, write your idea below input box
          </p>
        
          <Image
                src="/robot-1.webp"
                alt="Bird flying animation" 
                className="rounded-full w-48 h-48 absolute top-0 right-0"
                width={105} 
                height={105} 
                
            />
        </div>
        
        <br /><br /><br /><br />
        <div className="mb-6">
          <label
            htmlFor="message"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Type your Idea
          </label>
          <textarea
            id="message"
            rows={4}
            className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Type Movie Idea..."
            onChange={(e)=>setAiIdea(e.target.value)}
            
          />
          
        </div>
        <div className="text-right">
          <button
            type="submit"
            className="bg-black text-white p-3 rounded-md dark:border"
          >
            Make Movie
          </button>
        </div>
      </div>
      </form>
    </div>
  );
};

export default AiFormInput;
