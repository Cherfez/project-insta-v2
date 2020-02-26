import React, { useEffect, useState } from "react";
// import SASS from "../style/global.scss";
// import userInfo from "./express"; //the script
import axios from "axios";

export default function Card() {
  {
    /*const users = [
    {
      userName: "Julia",
      avatarPic: "https://media.nu.nl/m/m1mxrliau1t4_wd640.jpeg",
      postedPicture:
        "https://upload.wikimedia.org/wikipedia/commons/5/59/Regent%27s_Park_bandstand.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel gravida dui, a interdum neque. Aenean tempus enim lectus, at pharetra nisi vestibulum at. Mauris nunc ligula, elementum eu tincidunt vel, tempor ac elit. Suspendisse sollicitudin consectetur mi et tempus. Donec ac metus consequat, mattis libero eget, mollis sem. Etiam lobortis, libero ac interdum auctor, turpis libero eleifend massa, sit amet venenatis dui enim et odio. Sed tempus, augue ac hendrerit hendrerit, lectus diam luctus nunc, nec malesuada felis urna sed orci. Nulla facilisi. Morbi pretium ante id turpis varius semper. Nulla viverra, erat eget molestie lacinia, neque eros tempus nisi, vel congue arcu ex nec turpis. Pellentesque ultricies molestie cursus. Integer in"
    },
    {
      userName: "Tony S.",
      avatarPic:
        "https://images.cdn.superguide.nl/8GQpIhdweaXQLTE_xOpsSKLZZ3c=/0x0:2000x1270/890x0/smart/superguide.nl/s3fs-public/main_media/avengers-iron-man.jpg?itok=VimKgK7k",
      postedPicture:
        "https://cdn.mos.cms.futurecdn.net/WifosGGPMBhMCVM3bvbrzf.jpg",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut vel gravida dui, a interdum neque. Aenean tempus enim lectus, at pharetra nisi vestibulum at. Mauris nunc ligula, elementum eu tincidunt vel, tempor ac elit. Suspendisse sollicitudin consectetur mi et tempus. Donec ac metus consequat, mattis libero eget, mollis sem. Etiam lobortis, libero ac interdum auctor, turpis libero eleifend massa, sit amet venenatis dui enim et odio. Sed tempus, augue ac hendrerit hendrerit, lectus diam luctus nunc, nec malesuada felis urna sed orci. Nulla facilisi. Morbi pretium ante id turpis varius "
    }
  ];*/
  }

  const [userInfo, set_userInfo] = useState([]);
  useEffect(() => {
    console.log("The useEffect action!");
    getUsers();
  }, []);

  async function getUsers() {
    try {
      const response = await axios.get("http://localhost:4000/");
      console.log("response ", response);
      set_userInfo(response.data);
    } catch (error) {
      console.log("error test:", error.message);
    }
  }

  const date = new Date();
  const timestamp = date.toLocaleDateString();

  return (
    <div>
      {userInfo.map(user => {
        return (
          <div className="card my-5">
            <div className="card-body">
              <img src={user.avatarPic} className="avatar" alt="avatar" />
              <h3 className="userName">{user.userName}</h3>
              <img
                src={user.postedPicture}
                className="userPostedPic"
                alt="posted picture"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/Heart_coraz%C3%B3n.svg/1200px-Heart_coraz%C3%B3n.svg.png"
                alt="heart"
                className="like"
              />
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Speech_bubble.svg/1200px-Speech_bubble.svg.png"
                alt="comments"
                className="comments"
              />
              <img
                src="https://cdn0.iconfinder.com/data/icons/harmonicons-07/64/share-512.png"
                alt="share"
                className="share"
              />
              <p>count of likes</p>
              <p class="card-text">{user.text}</p>
              <p>{timestamp}</p>
              <p>See all comments...</p>
              <p>Add a comment....</p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
