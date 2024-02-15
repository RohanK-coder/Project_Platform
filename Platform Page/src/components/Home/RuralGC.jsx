import Pic1 from '../../assets/Grand challenges/1.jpg'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import turmeric from '../../assets/turmeric.jpg'
import horticulture from '../../assets/horticulture.jpg'
import digital from '../../assets/digital.jpg'
export default function CardSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };
  return (
    <>
      <div className="RC">
        <h1 className="heading-community">Rural Grand Challenges</h1>

        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data.map( det => (
                <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-60">
                  <img
                    src={det.img}
                    alt="card-image"
                    width='400px'
                    
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {det.name}
                  </Typography>
                  <Typography>
                    {det.review}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button><a href={det.anchor}>Read More</a></Button>
                </CardFooter>
              </Card>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className="heading-community">Pilot Projects</h1>
        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data2.map( det => (
                <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-60">
                  <img
                    src={det.img}
                    alt="card-image"
                    width='400px'
                    
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {det.name}
                  </Typography>
                  <Typography>
                    {det.review}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button><a href={det.anchor}>Read More</a></Button>
                </CardFooter>
              </Card>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className="heading-community">Student Projects</h1>
        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data3.map( det => (
                <Card className="mt-6 w-96">
                <CardHeader color="blue-gray" className="relative h-60">
                  <img
                    src={det.img}
                    alt="card-image"
                    width='400px'
                    
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {det.name}
                  </Typography>
                  <Typography>
                    {det.review}
                  </Typography>
                </CardBody>
                <CardFooter className="pt-0">
                  <Button><a href={det.anchor}>Read More</a></Button>
                </CardFooter>
              </Card>
              ))}
            </Slider>
          </div>
        </div>
        <h1 className="heading-community">Corporate Partners</h1>
        <div className="w-3/4 m-auto">
          <div className="mt-20 ">
            <Slider {...settings}>
              {data4.map( det => (
                <Card className="mt-6 w-96">
                <CardHeader color="white" className="relative h-60">
                  <img
                    src={det.img}
                    alt="card-image"
                    width='400px'
                    
                  />
                </CardHeader>
                <CardBody>
                  <Typography variant="h5" color="blue-gray" className="mb-2">
                    {det.name}
                  </Typography>
                  
                </CardBody>
                <CardFooter className="pt-0">
                  <Button><a href={det.anchor}>Read More</a></Button>
                </CardFooter>
              </Card>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: 'Turmeric',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1707881649/GC/vs1fnpc1mydaj7wkhnxp.jpg',
    review: 'How can Meghalaya market its spice treasure “turmeric” to global...',
    anchor:"/details/65ca13d77d462abcc25591ad",
  },
  {
    name: 'Horticulture',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1707881649/GC/ubk6amkb4mtkwikr5dzh.jpg',
    review: 'Horticulture: How can Meghalaya access global markets to distribute their..',
    anchor:"/details/65cc7bc5cbc1cfc501ba3f49",
  },
  {
    name: 'Digital Healthcare',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1707881649/GC/qteb0vxw7t9rlqymt7im.jpg',
    review: 'Healthcare: How can high quality “AI-led healthcare services” be made...',
    anchor:"/details/65cc7cbfcbc1cfc501ba3f4a",
  },
];
const data2 = [
  {
    name: 'Waste Management',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1708028384/i4fjwh0dra0raqrc1chx.jpg',
    anchor:"/research-project/65cc8547cbc1cfc501ba3f55",
    review: 'ProjectType: Research',
  },
  {
    name: 'Access to Clean Cooking Fuel',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1708028388/lhhdhk97mdymhr1xmpcy.jpg',
    anchor:"/research-project/65cc8547cbc1cfc501ba3f55",
    review: 'ProjectType: Research',
  },
  {
    name: 'Affordable Housing',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1708028386/kggltijb80fhn5oo8pk7.jpg',
    anchor:"/research-project/65cc8547cbc1cfc501ba3f55",
    review: 'ProjectType: Research',
  },
];
const data3 = [
  {
    name: 'Salesforce Trailblazers Labs',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1708028605/ylckxu6ns5snxvuq64wq.jpg',
    anchor:"/village-projects",
    review: 'Salesforce, headquartered in San Francisco, California, is setting up two Trailblazer labs in two selected Smart Village Movement pilot villages in the East Khasi Hills District,..',
  },
  {
    name: 'Gramin Representative arrival for ground assessment',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1708028605/iepvrwtufocnewtdhn2y.avif',
    anchor:"/village-project/65cce272a3ff5a5d14a9ddb4",
    review: 'Activity Date: 19-Jan-2021',
    
  },
  {
    name: 'Hygge Energy Microgrid',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1708028606/jsfmvdm1cmbpto9x6ihw.jpg',
    anchor:"/research-project/65cc8547cbc1cfc501ba3f55",
    review: 'ProjectType: Collaboration',
  },
];
const data4 = [
  {
    name: 'Tulaa',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1707885861/Technologies/sek3hdeufauovtsdu7wl.png',
    anchor:"/technologies/65cba5cd7d462abcc2146578 ",
    review: 'Salesforce, headquartered in San Francisco, California, is setting up two Trailblazer labs in two selected Smart Village Movement pilot villages in the East Khasi Hills District,..',
  },
  {
    name: 'Doctor on Demand',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1707885861/Technologies/xgsaxis59j5uznrg8qwa.png',
    anchor:"/technologies/65cba5cd7d462abcc214657a",
    review: 'Activity Date: 19-Jan-2021',
  },
  {
    name: 'Waste Ventures India',
    img: 'https://res.cloudinary.com/duad230uy/image/upload/v1707885861/Technologies/lpvj8ewzhqqmc54nphn2.png',
    anchor:"/technologies/65cba5cd7d462abcc214657e ",
    review: 'ProjectType: Collaboration',
  },
];


