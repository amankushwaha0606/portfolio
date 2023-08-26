import { Component } from '@angular/core';

@Component({
  selector: 'about-me',
  templateUrl: './about-me.component.html',
  styleUrls: ['./about-me.component.scss'],
})
export class AboutMeComponent {
  public aboutMe = [
    `Hello there! I'm <strong>Aman Singh Kushwaha</strong>, a passionate and driven frontend developer with an insatiable hunger for knowledge. Born on June 6, 2000, I bring a youthful and dynamic energy to every project I undertake.`,
    `My journey into the world of development began with a spark of curiosity, which has grown into a blazing flame of expertise. As a frontend developer, I'm constantly exploring new technologies and pushing the boundaries of user interface design to create seamless and captivating digital experiences.`,
    `But there's more to me than just lines of code. I'm also a force to be reckoned with on the sports field. A state-level handball player, I've honed my skills in teamwork, strategy, and determination through countless matches and practices. Not stopping there, I've also embraced the fast-paced world of hockey, playing both as a forward and a goalkeeper. This dual role has taught me versatility, adaptability, and the importance of balance in every aspect of life.`,
    `My pursuits aren't limited to sports and development, though. I'm an IITian, a testament to my academic dedication and ability to thrive in a challenging environment. Beyond the technical realm, I find solace and expression in Shayri, where words become art and emotions take shape. And when I'm not immersed in code or verses, you'll likely find me in the kitchen, whipping up culinary creations that satisfy both the stomach and the soul.`,
    `Wanderlust is another one of my constants. Having explored more than 30 cities and counting, I've developed a deep appreciation for the diverse cultures, landscapes, and experiences that our world has to offer. Travel, for me, is a wellspring of inspiration that fuels my creativity and broadens my perspective.`,
    `So, whether I'm crafting elegant code, making heartwarming Shayri, or venturing into the unknown, one thing remains consistent: my unwavering dedication to growth, excellence, and the pursuit of a life lived to its fullest.`,
    `Join me on this remarkable journey, where technology, sports, poetry, and adventure converge to create an extraordinary tapestry of experiences.`,
  ];
  
  public achievements = [
    ['23+','Years of Learning'],
    ['4', 'Played in State level ( Handball )'],
    ['2', 'Inter IIT Sports meet ( Hockey )'],
    ['5+', 'Years of Coding'],
    ['30+', 'Travaeled Cities'],
  ]
}
