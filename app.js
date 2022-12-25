import axios from "axios";

async function getData(user_id) {
    const {data: dataUsers} = await axios("https://jsonplaceholder.typicode.com/users/" + user_id);
    const {data: dataPosts} = await axios("https://jsonplaceholder.typicode.com/posts?userId=" + user_id);
    dataUsers.posts = new Array();
    dataPosts.map((item) => {
        dataUsers.posts.push(item);
    });
    console.log(dataUsers);
}

export default getData;