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
      <h1 className='heading-community'>Community</h1>
      <ul className='flex ml-60 mr-60 items-center justify-between gap-10 flex-wrap pb-10'>{listItems}</ul>
      </div>
      

    </>
  );
}
