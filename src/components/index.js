export const songComponent = (data) => {

  const song = document.createElement('div')
  song.innerHTML= `
    <div class="flex p-4">
      <div class="h-20">
        <img
          src="${data.path.front}"

          class="object-cover h-full"
        >
      </div>
      <div class="flex flex-col justify-center ml-8">
        <h5 class="font-bold">${data.title}</h5>
        <p class="opacity-50">${data.author}</p>
      </div>
    </div>
  `
  return song
}