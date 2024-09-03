import { Slider as SliderComponent } from '@tnf-workspace/react-components';

type SliderProps = {
  posts: {
    slug: string;
    cover: string;
    title: string;
    subTitle: string;
    pubDate: Date;
    author: {
      name: string;
      avatar: string;
    };
  }[];
  className?: string;
};

export const Slider = ({ posts, className }: SliderProps) => {
  return (
    <SliderComponent className={className}>
      {posts.map((post) => (
        <a
          key={post.slug}
          href={`/blog/${post.slug}/`}
          className="inline-block max-w-[322px]"
        >
          <div class="aspect-video w-full">
            <img src={post.cover} class="w-full h-full object-cover" />
          </div>
          <div class="mt-5 flex items-center">
            <div class="w-[30px] h-[30px] rounded-full overflow-hidden">
              <img
                src={post.author.avatar}
                class="w-full h-full object-cover"
              />
            </div>
            <div class="ml-2 text-[14px] leading-1">{post.author.name}</div>
            <div class="ml-auto text-[14px] leading-1">
              {post.pubDate.toLocaleDateString('en-us', {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })}
            </div>
          </div>
          <h4 class="title mt-4 text-h6 line-clamp-2">{post.title}</h4>
          <div class="italic text-[14px] font-thin mt-1 text-orange-200 line-clamp-2">
            {post.subTitle}
          </div>
        </a>
      ))}
    </SliderComponent>
  );
};
