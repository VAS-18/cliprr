import { Router } from "express";
import youtubeDl from "youtube-dl-exec";

const router = Router();

router.post("/info", async (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "url is required" });

  try {
    const info = await youtubeDl(url, {
      dumpSingleJson: true,
      noCheckCertificates: true,
      noWarnings: true,
      extractorArgs:
        "youtube:po_token=web.gvs+MnhtB7QmheW-9207E1iJbAUwsdSSYAEkyn7AH5TdSaUWJehH-LmgxIoDOYFzDPVr7VLpk8cekOTVR_Up6BxkpKVmgx5_IPlWxx2Z4V6GRFBrVrnw55ty-uZFalz3KHoH4dFK33Xt6XeIJwJPoYJiam18KPeKcMlUpKI=",
      userAgent:
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
    });

    const title = info.title;
    const formats = info.formats;
    const temp_resolution = formats
      .map((f) => f.format_note)
      .filter((p) => p.endsWith("p"));

    const resolution = new Set(temp_resolution);

    res.json({ title, resolution });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: "Failed to fetch video info" });
  }
});

export default router;
