import {
  pgTable,
  uuid,
  text,
  real,
  integer,
  timestamp,
  pgEnum,
} from "drizzle-orm/pg-core";

const clipStatusEnum = pgEnum("clip_status", [
  "processing",
  "completed",
  "failed",
]);

const clips = pgTable("clips", {
  id: uuid("id").defaultRandom().primaryKey(),
  youtubeUrl: text("youtube_url").notNull(),
  title: text("title"),
  quality: text("quality").notNull(),
  startTime: real("start_time").notNull(),
  endTime: real("end_time").notNull(),
  duration: real("duration").notNull(),
  filename: text("filename").notNull(),
  filePath: text("file_path").notNull(),
  fileSize: integer("file_size"),
  status: clipStatusEnum("status").default("processing").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
  updatedAt: timestamp("updated_at").defaultNow().notNull(),
});

export { clipStatusEnum, clips };
