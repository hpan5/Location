import React, { useState } from 'react';
import './App.css';
import axios from 'axios';
import TableBody from './TableBody';
const App = () => {
  const [posts, setPosts] = useState([]);
  const [city, setCity] = useState('');
  const [zip, setZip] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(city);
    console.log(zip);
    fetchPosts();
  }

  const onClear = (e) => {
    e.preventDefault();
    setCity('');
    setZip('');
    setPosts([]);
  }

  const fetchPosts = async () => {
    try {
      let url = '/bing/locations?';
      let apiUrl = url + `locality=${city}`+ (zip && `&postalCode=${zip}`) + '&countryRegion=US';
      console.log(apiUrl);
      await axios.get(apiUrl).then(
        (response) => {
          setPosts(response.data.resourceSets[0].resources);
          console.log("posts: ", posts);
          console.log(posts[0].name);
        }
      );
    } catch (e) {
      console.log(e);
    }
  }

  return(
    <div>
      <form onSubmit={handleSubmit}>
      <label>
        City:
        <input
          type="text"
          value={city}
          onChange={e => setCity(e.target.value)}
        />
        Zip Code:
        <input
          type="text"
          value={zip}
          onChange={e => setZip(e.target.value)}
        />
      </label>
      <input type="submit" value="Submit" />
      <button type="button" onClick={onClear}> Clear </button>
    </form>
    
      <table>
        <thead>
          <tr>
            <th> Name </th>
            <th> South Latitude </th>
            <th> North Latitude </th>
            <th> East Latitude </th>
            <th> East Latitude </th>
          </tr>
        </thead>
        <TableBody posts={posts}/>
      </table>
    </div>
    
  )
}

export default App;
/*
<form onSubmit={handleSubmit}>
        <label>
          City:
          <input
            type="text"
            value={city}
            onChange={e => setCity(e.target.city)}
          />
        </label>
        <button type="submit"> Submit </button>
        <button type="clear" onClick={onCancel}> Cancel </button>
      </form>

From Haotian(Arthur) Yang to Everyone:  05:05 PM
Access to XMLHttpRequest at 'https://experimental-test.azurewebsites.net/bing/locations?locality=&postalCode=98682' from origin 'http://localhost:3000' has been blocked by CORS policy: The 'Access-Control-Allow-Origin' header contains multiple values '*, *', but only one is allowed.
From USTSV Professor to Everyone:  05:15 PM
Chrome.exe --disable-web-security
open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf?hl=en

*/