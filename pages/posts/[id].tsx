import Image from 'next/image';
import Link from 'next/link';

interface Post {
  title: string;
  id: string;
  poster: string;
  actors: string;
  awards: string;
  plot: string;
  director: string;
  writer: string;
  images: [string];
}

export const getStaticPaths = async () => {
  const res = await fetch('http://moviesapi.ir/api/v1/movies');
  const posts = await res.json();
  const paths = posts.data.map((post: { id: { toString: () => any } }) => ({
    params: { id: post.id.toString() },
  }));
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params }: { params: Post }) => {
  const res = await fetch(`http://moviesapi.ir/api/v1/movies/${params.id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
};

export default function singlPost({ post }: { post: Post }) {
  return (
    <div className="container w-[700px] mx-auto mt-20">
      <div className="mb-10">
        <Link href="/posts">
          <a className="text-slate-500 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              strokeWidth="0.5"
              stroke="#3f3f46"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <line x1="5" y1="12" x2="19" y2="12" />
              <line x1="5" y1="12" x2="9" y2="16" />
              <line x1="5" y1="12" x2="9" y2="8" />
            </svg>
            back to list
          </a>
        </Link>
      </div>
      <div className="prose mb-5">
        <h1 className="text-4xl  font-back text-zinc-800 ">{post.title}</h1>
        <p className="text-zinc-600 font-serif text-[18px]">
          {post.plot}
          <br />
          Actors of this movie are: {post.actors}
          <br />
          Awards that this movie got are: {post.awards}
        </p>
        <p className="text-zinc-600 font-serif  text-[18px]">
          We shall now see poster of movie as well:
        </p>
      </div>
      <div className="prose mb-10">
        <Image src={post.poster} alt={post.title} width="700" height="900" />
        <p className="italic m-0 mt-2 text-sm text-zinc-500 text-center">
          Director : {post.director}
        </p>
      </div>
      <div className="border-b border-slate-200 pb-10">
        <h2 className="text-zinc-600 italic text-2xl translate-x-[-127px] mb-6 ">
          «{post.writer}»
        </h2>
        <div className="flex gap-2 mb-6 ">
          {post.images.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={post.title}
              height={400}
              width={300}
              objectFit="cover"
              objectPosition="center"
            />
          ))}
        </div>
        <p className="font-srif tracking-wide text-zinc-600">
          As you know hiking can be a very fulfilling orem ipsum dolor sit amet,
          animal saperet et ius, eu mei nominavi democritum. Tempor prompta
          mnesarchum eam te. Vivendum recteque ad quo, et vim quot scaevola
          hendrerit, sint option euripidis vel te.
          <br /> Impedit veritus qui eu, vel modo accusam at. Te dicit accusamus
          mea, alia omnium no est. Mea cu possit invidunt complectitur, sea
          omnis vivendum ne. Eros dictas assentior ne qui. At has aperiam
          reformidans. Rebum choro imperdiet ex mei. Ea vide elit percipit mel,
          id eam invidunt vituperatoribus. Munere temporibus consequuntur no
          sit. Justo utroque dissentias at est, possim dolorem assueverit eam
          ut. Te erat illud aperiri est. Cu duo sanctus scriptorem, nam te habeo
          fuisset quaestio. Eam et error simul. Ferri utamur instructior vim in,
          ei per mazim congue, nusquam vituperatoribus eos an. Ne mea salutatus
          vulputate. Tota tractatos argumentum vis te. Et iusto nostrud vel, cu
          vis regione virtute. Malis errem ex quo, an est percipitur dissentias.
          Te facer primis alterum vel. Tale senserit sadipscing qui et. Prima
          fabellas facilisis at has. Vel erat splendide expetendis et, at probo
          dictas nominavi pro. Ius facilis electram maluisset et. Minim
          dignissim ne eam, docendi indoctum conclusionemque mea ne. Ea menandri
          quaestio corrumpit his. Vim nisl lucilius interesset in, cu porro
          accusamus accommodare his.
        </p>
      </div>
      <footer className="p-10 flex flex-col items-center justify-center ">
        <div className="prose   ">
          <p className="text-gray-500">
            Proudly published with
            <Link href="https://nextjs.org/">
              <span className="font-extrabold text-black cursor-pointer">
                {' '}
                Next.js
              </span>
            </Link>
          </p>
        </div>

        <div>
          <svg
            className="w-20 h-20"
            viewBox="0 0 512 309"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            preserveAspectRatio="xMidYMid"
          >
            <g>
              <path
                d="M120.81043,80.5613102 L217.378325,80.5613102 L217.378325,88.2366589 L129.662487,88.2366589 L129.662487,146.003758 L212.147564,146.003758 L212.147564,153.679106 L129.662487,153.679106 L129.662487,217.101725 L218.384241,217.101725 L218.384241,224.777073 L120.81043,224.777073 L120.81043,80.5613102 Z M226.0292,80.5613102 L236.289538,80.5613102 L281.756922,143.983929 L328.230222,80.5613102 L391.441486,0 L287.591232,150.649363 L341.105941,224.777073 L330.443237,224.777073 L281.756922,157.314798 L232.869425,224.777073 L222.407904,224.777073 L276.324978,150.649363 L226.0292,80.5613102 Z M344.928421,88.2366588 L344.928421,80.5613102 L454.975585,80.5613102 L454.975585,88.2366589 L404.27744,88.2366589 L404.27744,224.777073 L395.425382,224.777073 L395.425382,88.2366589 L344.928421,88.2366588 Z M1.42108547e-14,80.5613102 L11.0650714,80.5613102 L163.64593,308.884007 L100.591558,224.777073 L9.25442331,91.4683847 L8.85205708,224.777073 L1.42108547e-14,224.777073 L1.42108547e-14,80.5613102 Z M454.083705,214.785469 C452.275167,214.785469 450.918762,213.38418 450.918762,211.573285 C450.918762,209.762388 452.275167,208.361099 454.083705,208.361099 C455.913774,208.361099 457.248648,209.762388 457.248648,211.573285 C457.248648,213.38418 455.913774,214.785469 454.083705,214.785469 Z M462.781915,206.334618 L467.518563,206.334618 C467.583153,208.900055 469.456284,210.624719 472.212151,210.624719 C475.290972,210.624719 477.03492,208.770705 477.03492,205.29982 L477.03492,183.310363 L481.85769,183.310363 L481.85769,205.321379 C481.85769,211.573285 478.240613,215.173518 472.255212,215.173518 C466.635824,215.173518 462.781915,211.681076 462.781915,206.334618 Z M488.166045,206.054362 L492.945754,206.054362 C493.354828,209.007848 496.239878,210.883419 500.395211,210.883419 C504.270652,210.883419 507.11264,208.878498 507.11264,206.119036 C507.11264,203.747625 505.304102,202.324777 501.191828,201.354653 L497.187209,200.384531 C491.56782,199.069474 489.005723,196.353129 489.005723,191.782772 C489.005723,186.24229 493.527071,182.555823 500.30909,182.555823 C506.617445,182.555823 511.224912,186.24229 511.504805,191.480955 L506.811217,191.480955 C506.359083,188.613703 503.861576,186.824365 500.244499,186.824365 C496.43365,186.824365 493.893085,188.656819 493.893085,191.459398 C493.893085,193.679901 495.52938,194.95184 499.577063,195.900406 L503.000368,196.741178 C509.373314,198.228702 512,200.815695 512,205.493846 C512,211.443935 507.392533,215.173518 500.029197,215.173518 C493.139526,215.173518 488.51053,211.6164 488.166045,206.054362 Z"
                fill="#000000"
                fillRule="nonzero"
              ></path>
            </g>
          </svg>
        </div>
      </footer>
    </div>
  );
}
