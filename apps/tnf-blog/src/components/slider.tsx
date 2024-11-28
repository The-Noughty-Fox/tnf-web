import { Slider as SliderComponent } from '@tnf-workspace/react-components';
import { pageRoutes } from '../lib/pageRoutes.ts';
import { getFormattedDate } from '../lib/utils/getFormattedDate.ts';

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
          href={pageRoutes.postDetails.href(post.slug)}
          className="inline-block max-w-[322px]"
        >
          <div className="aspect-video w-full">
            <img src={post.cover} className="w-full h-full object-cover" />
          </div>
          <div className="mt-5 flex items-center">
            <div className="w-[30px] h-[30px] rounded-full overflow-hidden">
              <img
                src={post.author.avatar}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="ml-2 text-[14px] leading-1">{post.author.name}</div>
            <div className="ml-auto text-[14px] leading-1">
              {getFormattedDate(post.pubDate)}
            </div>
          </div>
          <h4 className="title mt-4 text-h6 line-clamp-2">{post.title}</h4>
          <div className="italic text-[14px] font-thin mt-1 text-orange-200 line-clamp-2">
            {post.subTitle}
          </div>
        </a>
      ))}
    </SliderComponent>
  );
};
