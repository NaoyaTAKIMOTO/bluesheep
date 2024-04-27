#!/bin/bash

# ディレクトリ内の全てのM4AファイルをMP3に変換するスクリプト

# 変換元のディレクトリ
input_dir="static/audio/2023-08-20"

# 変換先のディレクトリ
output_dir="static/audio/2023-08-20"

# M4AファイルをMP3に変換
for file in "$input_dir"/*.m4a; do
    filename=$(basename "$file")
    filename_no_ext="${filename%.*}"
    ffmpeg -i "$file" -codec:a libmp3lame -q:a 2 "$output_dir/$filename_no_ext.mp3"
done

echo "Conversion completed!"
