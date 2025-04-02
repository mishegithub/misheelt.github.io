document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const content = document.getElementById('content').value;
    const imageFile = document.getElementById('image').files[0];

    if (title && content && imageFile) {
        const reader = new FileReader();

        reader.onload = function(e) {
            const imageUrl = e.target.result;

            const postDiv = document.createElement('div');
            postDiv.classList.add('blog-post');

            postDiv.innerHTML = `
                <h2>${title}</h2>
                <img src="${imageUrl}" alt="Зураг">
                <p>${content}</p>
            `;

            document.getElementById('blogPosts').appendChild(postDiv);

            // Формаас хариулт арилгах
            document.getElementById('blogForm').reset();
        };

        reader.readAsDataURL(imageFile);
    } else {
        alert('Гарчиг, зураг, болон тэмдэглэлийг бөглөх шаардлагатай!');
    }
});
