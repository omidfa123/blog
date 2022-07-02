import Link from 'next/link';

export default function Article({ post }) {
  return (
    <div className="prose ">
      <Link href={'/posts/' + post.id}>
        <h2 className="text-zinc-700 text-[1.8rem] m-0  tracking-wide font-black cursor-pointer ">
          {post.title}
        </h2>
      </Link>
      <p className="text-gray-500">
        {post.country} , {post.year}
      </p>
      <p className="font-serif text-[18px] mb-10 ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Qui, doloribus
        facilis tenetur magni, inventore sapiente rerum quae quis deserunt cum
        magnam cumque aliquid maiores voluptas? Odit dicta dolorem consequatur
        illo.
      </p>
    </div>
  );
}
