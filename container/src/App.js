
import './App.scss';


import ArrayDisplay from './Components/chatgtp';
const data = [
  {
    image: 'https://rentylatreunion.com/wp-content/uploads/2023/12/spectrum-et-townhomes-front-garden.jpeg',
    title: 'Luxury Townhomes',
    btn_text: 'Browse Townhomes',
    details: 'Comfort and elegance beautifully merge in our well-designed 3 bedroom Golf Course Area Townhome. It’s a welcoming setting to relax and immerse yourself in our unique lifestyle.',
    no_of_beds: '3 Bedrooms'
  },
  {
    image: 'https://rentylatreunion.com/wp-content/uploads/2023/12/spectrum-condo-5-bed-plus-living-3.jpeg',
    title: 'Luxury Condos',
    btn_text: 'Browse Condos',
    details: 'Our luxury condos feature an open, modern design with 3 to 5 bedrooms. Your family and friends will love spreading out and relaxing in this spacious, comfortable vacation home.',
    no_of_beds: '3-5 Bedrooms'
  },
  {
    image: 'https://rentylatreunion.com/wp-content/uploads/2023/12/rentyl-at-reunion-home-906-jack-nicklaus-pool.jpeg',
    title: 'Luxury Resort Homes',
    btn_text: 'Browse Resort Homes',
    details: 'Our well-appointed, curated homes are designed with luxury, privacy, and security in mind. Select one of our spacious homes with 4 to 8 bedrooms and travel comfortably.',
    no_of_beds: '4-8 Bedrooms'
  },
  {
    image: 'https://rentylatreunion.com/wp-content/uploads/2023/12/spectrum-et-townhomes-front-garden.jpeg',
    title: 'Luxury Townhomes',
    btn_text: 'Browse Townhomes',
    details: 'Comfort and elegance beautifully merge in our well-designed 3 bedroom Golf Course Area Townhome. It’s a welcoming setting to relax and immerse yourself in our unique lifestyle.',
    no_of_beds: '3 Bedrooms'
  },
  {
    image: 'https://rentylatreunion.com/wp-content/uploads/2023/12/spectrum-condo-5-bed-plus-living-3.jpeg',
    title: 'Luxury Condos',
    btn_text: 'Browse Condos',
    details: 'Our luxury condos feature an open, modern design with 3 to 5 bedrooms. Your family and friends will love spreading out and relaxing in this spacious, comfortable vacation home.',
    no_of_beds: '3-5 Bedrooms'
  },
  {
    image: 'https://rentylatreunion.com/wp-content/uploads/2023/12/rentyl-at-reunion-home-906-jack-nicklaus-pool.jpeg',
    title: 'Luxury Resort Homes',
    btn_text: 'Browse Resort Homes',
    details: 'Our well-appointed, curated homes are designed with luxury, privacy, and security in mind. Select one of our spacious homes with 4 to 8 bedrooms and travel comfortably.',
    no_of_beds: '4-8 Bedrooms'
  }

]
function App() {
  
 
  return (
    <div className="App">
      
      <ArrayDisplay props={data}/>
    </div>
  );
}

export default App;
