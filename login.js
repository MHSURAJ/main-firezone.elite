function googleLogin() {
    var provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then((result) => {
            localStorage.setItem("user", JSON.stringify(result.user));
            window.location.href = "public.html";
        })
        .catch((error) => {
            alert("Error: " + error.message);
        });
}
