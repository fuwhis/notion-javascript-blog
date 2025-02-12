import dynamic from 'next/dynamic';
import ReactPlayer from 'react-player';

type Props = {
  url: string;
};

function YoutubeEmbed({ url }: Props) {
  return (
    <div className="flex justify-center items-center">
      <ReactPlayer url={url} />
    </div>
  );
}

export default dynamic(() => Promise.resolve(YoutubeEmbed), { ssr: false });
