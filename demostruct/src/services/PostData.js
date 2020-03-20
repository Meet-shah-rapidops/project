function PostData(type, userData) {
    let BaseUrl = 'https://assignment-system.herokuapp.com/user/api/admin/';

    return new Promise((resolve, reject) => {
        fetch(BaseUrl + type, {
                method: 'Post',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            .then((response) => response.json())
            .then((responseJson) => {
                resolve(responseJson);
            })
            .catch((error) => {
                reject(error);
            });
    });
}
export default PostData;