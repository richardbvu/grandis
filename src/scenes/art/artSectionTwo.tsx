import { LazyLoadImage } from "react-lazy-load-image-component";
import ArtImage2 from "../../assets/ArtImage2.jpg";
import ArtImage3 from "../../assets/ArtImage3.jpg";
import ArtImage4 from "../../assets/ArtImage4.jpg";
import ArtImage5 from "../../assets/ArtImage5.jpg";
import "react-lazy-load-image-component/src/effects/blur.css";

const ArtSectionTwo = () => {
  return (
    <div className="flex flex-col gap-[150px]">
      <div className="flex flex-col gap-10">
        <div className="mx-auto">
          <LazyLoadImage
            src={ArtImage2}
            alt="elephant-image"
            className="w-[1000px] rounded px-5"
          />
        </div>
        <div className="mx-auto flex flex-col gap-5 xs:w-[80%] sm:w-[75%] md:w-[65%] lg:w-[45%]">
          <div className="text-5xl text-gray-100">Elephant</div>
          <div>
            My collaborator and I designed this mural to honor The Richard
            Group’s immense support for wildlife conservation, my roots, and her
            namesake. The choice of an elephant felt both special and fitting,
            symbolizing the importance of awareness about the species' near
            extinction. This wall was the perfect canvas to bring the idea to
            life. The distinctive border further emphasizes the mural's
            significance within the series.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="mx-auto">
          <LazyLoadImage
            src={ArtImage3}
            alt="hearts-image"
            className="w-[1000px] rounded px-5"
          />
        </div>
        <div className="mx-auto flex flex-col gap-5 after:text-end xs:w-[80%] sm:w-[75%] md:w-[65%] lg:w-[45%]">
          <div className="text-5xl text-gray-100">Hearts</div>
          <div>
            We should all aim to have a big heart in life, and this artwork
            embodies that sentiment. It's a symbol that resonates with everyone.
            The over a thousand paint lids used were recycled from this project
            and various building sites. The intentional rust gives the piece a
            sense of life and character. As the artist, I find its evolving
            nature fascinating, and I'm particularly drawn to the colors that
            unify the entire mural series.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="mx-auto">
          <LazyLoadImage
            src={ArtImage4}
            alt="woman-art-image"
            className="w-[1000px] rounded px-5"
          />
        </div>
        <div className="mx-auto flex flex-col gap-5 text-start xs:w-[80%] sm:w-[75%] md:w-[65%] lg:w-[45%]">
          <div className="text-5xl text-gray-100">Woman</div>
          <div>
            This modern painting depicts a vibrant and colorful portrait of a
            woman, bursting with energy and emotion. Her figure is outlined in
            bold, dynamic lines that give a sense of movement and fluidity. The
            artist has used a rich palette of bright colors—vivid reds, electric
            blues, and deep purples—that blend and contrast, creating a striking
            visual impact. The woman’s expression is both enigmatic and
            powerful, with her eyes slightly closed, suggesting a moment of
            introspection or deep thought. An abstract mix of swirling colors,
            adding depth and complexity to the piece. The overall effect is one
            of modernity, strength, and individuality, making the painting a
            compelling centerpiece that draws viewers in with its intensity and
            beauty.
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-10">
        <div className="mx-auto">
          <LazyLoadImage
            src={ArtImage5}
            alt="beautiful-woman-art-image"
            className="w-[1000px] rounded px-5"
          />
        </div>
        <div className="mx-auto flex flex-col gap-5 text-end xs:w-[80%] sm:w-[75%] md:w-[65%] lg:w-[45%]">
          <div className="text-5xl text-gray-100">Beauty</div>
          <div>
            This painting captures a striking and enigmatic portrayal of a
            woman's facial features, set against a dark, shadowy backdrop. The
            modern composition is both colorful and mysterious, with vibrant
            hues of deep purples, electric blues, and fiery reds contrasting
            sharply with the inky blackness surrounding them. The woman's face
            is partially obscured, with only fragments of her features—an eye,
            part of a cheekbone, and the curve of her lips—emerging from the
            shadows. These details are rendered with sharp, almost abstract
            strokes, giving her an ethereal and otherworldly presence. The
            colors seem to pulse with energy, creating a sense of movement and
            depth, as if the woman is slowly revealing herself from the
            darkness, inviting the viewer into her secretive, hidden world. The
            overall effect is haunting yet mesmerizing, leaving a lingering
            sense of mystery and intrigue.
          </div>
        </div>
      </div>
    </div>
  );
};
export default ArtSectionTwo;
