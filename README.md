# cliprr

paste a youtube url, pick a quality, scrub to where you want, cut the clip. that's it.

no full download. ffmpeg cuts directly from the stream so only the segment you want gets pulled.

## stack

- react + vite
- express
- yt-dlp + ffmpeg
- drizzle + supabase (postgres)

## requires

- node 18+
- yt-dlp installed and in PATH
- ffmpeg installed and in PATH

## running locally

```bash
# backend
cd server
npm install
cp .env.example .env  # fill in DATABASE_URL
npm run dev

# frontend
cd client
npm install
npm run dev
```

## how it works

1. paste a youtube url
2. pick quality (360p–1080p)
3. video streams through the express server (bypasses youtube's CORS)
4. scrub to your start and end point using the sliders
5. hit cut — ffmpeg trims directly from the stream url
6. preview + download the clip

note: 480p and above have separate video/audio streams that ffmpeg merges on the fly.
