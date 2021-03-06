import * as React from "react";

import styles from "./AlbumTrackEditor.module.css";

import { FileIcon } from "view/icon/round-file";

type TFileProps = {
  text: string;
};

export const AlbumTrackEditorLabel = ({ text }: TFileProps) => (
  <div className={styles.AlbumTrackEditor__FileInfo}>
    <FileIcon className={styles.AlbumTrackEditor__FileIcon} />
    <span className={styles.AlbumTrackEditor__FileName}>{text}</span>
  </div>
);
