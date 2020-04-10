import React from 'react';

function Food({name, picture}){
  return <div>
    <h2>I like {name}</h2>
    <img src={picture}/>
  </div>
}


const foodILike = [
  {
    name: "김밥",
    image: "https://homecuisine.co.kr/files/attach/images/140/001/083/558d170258752df2dd76bef00861497f.JPG"
  },
  {
    name: "떡볶이",
    image: "https://lh3.googleusercontent.com/proxy/56dIpPDueDKna6aokPCApeRCQJLHy0d-V_Y5DQrnaonWqhmNZoyn9x6-D2aAIEne_is-Z6l1y2oFi9jGROREPvj1VrTnVwm9M2_-EnSGJSkDkZAaoR-g6XsyNJlgg1vxm-Rtq5AmLZziVV4iVVM-FBGz4K_F3cSxl3t7SYP7XRY3TT-deImslvCAW2U"
  }
];

function App() {
  return (
    <div>
      {foodILike.map(dish => (      //dish는 object
      <Food name={dish.name} 
      picture={dish.image}  />))}
    
     </div>
      
      
    
  );
}

export default App;