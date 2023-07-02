function generate()
{
  let quoteElement= document.getElementById("quote");
let number=Math.floor(Math.random() * 10);


switch (number) {
  case 0:
    quoteElement.innerHTML = "In nature, every leaf, flower, and blade of grass has its own unique story to tell.";
    break;
  case 1:
    quoteElement.innerHTML = "The beauty of nature lies in its simplicity, where even the tiniest wildflower can bring joy.";
    break;
  case 2:
    quoteElement.innerHTML = "Just as nature patiently awaits the arrival of spring, so too should we learn to embrace the seasons of our lives.";
    break;
  case 3:
    quoteElement.innerHTML = "Nature's melodies are whispered through the rustling leaves, singing a soothing symphony to the soul.";
    break;
  case 4:
    quoteElement.innerHTML = "The sun's warm embrace reminds us that nature is always ready to offer its nurturing light.";
    break;
  case 5:
    quoteElement.innerHTML = "As rivers carve their way through mountains, let your dreams carve a path through life's obstacles.";
    break;
  case 6:
    quoteElement.innerHTML = "In the dance of fireflies, we witness nature's enchanting nighttime spectacle.";
    break;
  case 7:
    quoteElement.innerHTML = "Like a butterfly emerging from its cocoon, nature reminds us of the transformative power of growth.";
    break;
  case 8:
    quoteElement.innerHTML = "In the vastness of the starlit sky, we find solace and a reminder of our small yet meaningful place in the universe.";
    break;
  case 9:
    quoteElement.innerHTML = "Nature's gentle raindrops are whispers of renewal, bringing life to barren lands.";
    break;
  default:
    quoteElement.innerHTML = "error";
    break;
}

}