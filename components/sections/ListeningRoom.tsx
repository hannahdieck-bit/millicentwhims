export default function ListeningRoom() {
  return (
    <div className="whimsy-player">
      <p className="music-box-title">✦ our music box ✦</p>

      <iframe
        src="https://open.spotify.com/embed/playlist/5aLxV2IlhEfuyRIMgrqm28?utm_source=generator"
        width="220"
        height="80"
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
      />
    </div>
  );
}