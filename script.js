// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(resp => resp.json())
//     .then(console.log)

//     async function fetchUsers (){
//         const resp = await fetch('https://jsonplaceholder.typicode.com/posts')
//         const data = await resp.json();
//         console.log(data);
//     }
//     fetchUsers()

    const urls = [
    'https://jsonplaceholder.typicode.com/users',
    'https://jsonplaceholder.typicode.com/posts',
    'https://jsonplaceholder.typicode.com/albums'
    ]
// #2) ADVANCED: Update the function below from the video to also have
// async await for this line: fetch(url).then(resp => resp.json())
// So there shouldn't be any .then() calls anymore!
// Don't get discouraged... this is a really tough one...

    // Promise.all(urls.map(url =>
    // fetch(url).then(resp => resp.json())
    // )).then(array =>{
    //     console.log('users', array[0])
    //     console.log('posts', array[1])
    //     console.log('albums', array[2])
    // }).catch('whopsy you silly')

    // const getData = async function(){
    //     const [ users, post, albums ] = await Promise.all(urls.map(url =>
    //          async function fetchSites() {
    //             const response = await fetch(url)
    //             return await response.json()
    //          }
            
    //     ))            
    //             console.log('users', users)
    //             console.log('posts', post)
    //             console.log('albums', albums)
    // }
    // getData()

    const getData3 = async function () {
        const [users, posts, albums] = await Promise.all(urls.map(async function (url) {
            const response = await fetch(url);
            return response.json();
          }),
        );
        console.log("users", users);
        console.log("posta", posts);
        console.log("albums", albums);
      };

      getData3()
    

    //     const getData2 = async function(){
    //     const [ users, post, albums ] = await Promise.all(urls.map(url =>
    //         fetch(url).then(resp => resp.json())
    //     ))
    //             console.log('users', users)
    //             console.log('posts', post)
    //             console.log('albums', albums)
    // }
    // getData2()

    // const secondResult  = await processResult(result);
    // console.log(secondResult)
    // return secondResult 
    

//     const getData = async function() {
//         try{
//             const [ users, post, albums ] = await Promise.all(urls.map(url =>
//                 fetch(url).then(resp => resp.json())
//                 ))
//                 console.log('users', users)
//                 console.log('posts', post)
//                 console.log('albums', albums)
//         } catch (error){
//             console.log('whopsy',error)
//         }
//     }
// getData()