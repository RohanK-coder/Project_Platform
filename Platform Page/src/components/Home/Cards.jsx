import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
} from '@material-tailwind/react';


export default function ProfileCard() {
  const card = [
    {
      name:"Dr. Anil Shah",
      description:"Executive Chairman, Smart Village Movement ",
      image:"https://res.cloudinary.com/duad230uy/image/upload/v1708061950/govnyrxa1laxhs5nwoxc.jpg",
    },
    {
      name:"Dr. Deepu Raithi",
      description: "Advisor to startups and business development executive ",
      image:"https://res.cloudinary.com/duad230uy/image/upload/v1708061991/fybdeioouqri96ct7jco.jpg",
    },
    {
      name:"Prof. Muralikrishna Iyyanki ",
      description: "Professor ",
      image:"https://res.cloudinary.com/duad230uy/image/upload/v1708062039/va0urinteoi7frvzb9mi.jpg",
    },
    {
      name:"Ms. Anna Fitter ",
      description: "Director of Communication, SVM ",
      image:"https://res.cloudinary.com/duad230uy/image/upload/v1708062064/sctwem4cslojxoitumqt.jpg",
    },
    {
      name:"Mr. Ritesh Tandon ",
      description: "Chief Liaision Officer ",
      image:"https://res.cloudinary.com/duad230uy/image/upload/v1708062096/aaqy6meni7coly2s1qal.jpg",
    },
    {
      name:"Mr. Tulenam Laloo",
      description: "State Lead, Meghalaya",
      image:"https://res.cloudinary.com/duad230uy/image/upload/v1708062120/uqokm2nupumvlxqdvx78.jpg",
    },
    {
      name:"Mr. Divine Dhakar ",
      description: "Education Lead, SVM Meghalaya ",
      image:"https://res.cloudinary.com/duad230uy/image/upload/v1708062145/nhvvdhx1gurfjyvoqarw.jpg",
    },
    {
      name:"Miss. Regia Kom",
      description:"Social Media & Marketing Lead",
      image:"https://res.cloudinary.com/duad230uy/image/upload/v1708062173/ioilgknk0y3nmmq9yzsj.jpg",
    },
    {
      name:"Ms. Alvareen Kharwalang ",
      description: "Healthcare Lead SVM Meghalaya ",
      image:"https://res.cloudinary.com/duad230uy/image/upload/v1708062207/xbuzlywjkfpnrgqrh8bv.jpg",
    },
    {
      name:"Balahunlang Rapsang ",
      description: " ",
      image:" ",
    },

  ];
  const listItems = card.map(det =>
    <div className='card'>
        <img className="cardImage" src={det.image} alt="" />
        <h1 className='cardTitle'><b>{det.name}</b></h1>
        <p>{det.description}</p>
      </div>
    );
  return (
    <>
      <div className='community'>
         <h1 className='heading-community'>Global Team</h1>
         <div className='darwin'>
          <div className='image'><img src="/src/assets/darwin.jpg" alt="" width={250}/></div>
          <div className='img-des'>
            <h1 className='text-gray-400 text-xl'>PROF. SOLOMON DARWIN</h1>
            <h3 className='text-white '>Executive Director, Centre for Growth Markets at Centre for Growth Markets, Haas School of Business</h3>
            <h3 className='socials'>Social Media : 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 448 512"><path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/></svg> 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" viewBox="0 0 512 512"><path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"/></svg>
            </h3>
          </div>
         </div>
      
      </div>
      

    </>
  );
}
