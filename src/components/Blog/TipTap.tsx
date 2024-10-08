import { useEffect, useRef, useState } from "react";
import { EditorProvider, useCurrentEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import Placeholder from "@tiptap/extension-placeholder";
import Heading from "@tiptap/extension-heading";
import IconButton from "@mui/material/IconButton";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import StrikethroughSIcon from "@mui/icons-material/StrikethroughS";
import FormatClearIcon from "@mui/icons-material/FormatClear";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import FormatListNumberedIcon from "@mui/icons-material/FormatListNumbered";
import CodeIcon from "@mui/icons-material/Code";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import UndoIcon from "@mui/icons-material/Undo";
import RedoIcon from "@mui/icons-material/Redo";
import FormatHeadingIcon from "@mui/icons-material/FormatSize";
import DeveloperModeIcon from "@mui/icons-material/DeveloperMode";
import ImageIcon from "@mui/icons-material/Image";
import { useMediaQuery, useTheme } from "@mui/material";
import "../../components/Blog/Tiptap-styles.css";
import Compressor from "compressorjs";
import ImageResize from "tiptap-extension-resize-image"; 

const MenuBar = ({ setEditorRef }: any) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const { editor } = useCurrentEditor();
  const fileInputRef = useRef(null);

  if (!editor) {
    return null;
  }

  useEffect(() => {
    if (editor && setEditorRef) {
      console.log("here12");
      setEditorRef(editor);
    }
  }, [editor, setEditorRef]);

  const handleImageUpload = async (file) => {
    let compressedFile;
    await new Promise<void>((resolve) => {
      new Compressor(file, {
        quality: 0.6,
        maxWidth: 1200,
        mimeType: "image/webp",
        success(result) {
          compressedFile = new File([result], "image.webp", {
            type: "image/webp",
          });
          resolve();
        },
        error(err) {
          console.error("Image compression error:", err);
        },
      });
    });

    if (compressedFile) {
      const reader = new FileReader();
      reader.onload = () => {
        const url = reader.result;
        editor
          .chain()
          .focus()
          .setImage({ src: url, style: "width: auto" })
          .run();
        fileInputRef.current.value = "";
      };
      reader.readAsDataURL(compressedFile);
    }
  };

  const triggerImageUpload = () => {
    fileInputRef.current.click(); // Trigger the file input click
  };

  const handlePaste = (event) => {
    const items = event.clipboardData.items;
    for (const item of items) {
      if (item.type.startsWith("image/")) {
        const file = item.getAsFile();
        if (file) {
          event.preventDefault(); // Prevent the default paste behavior
          handleImageUpload(file); // Call the image upload function
        }
      }
    }
  };

  useEffect(() => {
    if (editor) {
      editor.view.dom.addEventListener("paste", handlePaste);
      return () => {
        editor.view.dom.removeEventListener("paste", handlePaste);
      };
    }
  }, [editor]);

  return (
    <div className="control-group">
      <div className="button-group">
        <IconButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          disabled={!editor.can().chain().focus().toggleBold().run()}
          sx={{
            color: editor.isActive("bold") ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
          }}
        >
          <FormatBoldIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          disabled={!editor.can().chain().focus().toggleItalic().run()}
          sx={{
            color: editor.isActive("italic") ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
          }}
        >
          <FormatItalicIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleStrike().run()}
          disabled={!editor.can().chain().focus().toggleStrike().run()}
          sx={{
            color: editor.isActive("strike") ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
          }}
        >
          <StrikethroughSIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleCode().run()}
          disabled={!editor.can().chain().focus().toggleCode().run()}
          sx={{
            color: editor.isActive("code") ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
          }}
        >
          <CodeIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().unsetAllMarks().run()}
          sx={{
            color:
              editor.isActive("bold") ||
              editor.isActive("italic") ||
              editor.isActive("strike") ||
              editor.isActive("code")
                ? "white"
                : "gray",
            padding: isMobile ? "5px" : "revert",
          }}
        >
          <FormatClearIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          sx={{
            color: editor.isActive("bulletList") ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
          }}
        >
          <FormatListBulletedIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          sx={{
            color: editor.isActive("orderedList") ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
          }}
        >
          <FormatListNumberedIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          sx={{
            color: editor.isActive("codeBlock") ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
          }}
        >
          <DeveloperModeIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          sx={{
            color: editor.isActive("blockquote") ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
          }}
        >
          <FormatQuoteIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          disabled={!editor.can().chain().focus().setHorizontalRule().run()}
          sx={{ color: "gray", padding: isMobile ? "5px" : "revert" }}
        >
          <HorizontalRuleIcon />
        </IconButton>
        <IconButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 1 }).run()
          }
          sx={{
            color: editor.isActive("heading", { level: 1 }) ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
            fontSize: "14px"
          }}
        >
          <FormatHeadingIcon fontSize="small" /> H1
        </IconButton>
        <IconButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          sx={{
            color: editor.isActive("heading", { level: 2 }) ? "white" : "gray",
            padding: isMobile ? "5px" : "revert",
            fontSize: "14px"
          }}
        >
          <FormatHeadingIcon fontSize="small" /> H2
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().chain().focus().undo().run()}
          sx={{ color: "gray", padding: isMobile ? "5px" : "revert" }}
        >
          <UndoIcon />
        </IconButton>
        <IconButton
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().chain().focus().redo().run()}
          sx={{ color: "gray" }}
        >
          <RedoIcon />
        </IconButton>
        <>
        <IconButton
              onClick={triggerImageUpload}
              sx={{ color: "gray", padding: isMobile ? "5px" : "revert" }}
            >
              <ImageIcon />
            </IconButton>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(event) => handleImageUpload(event.target.files[0])}
              accept="image/*"
            />
          </>
      </div>
    </div>
  );
};

const extensions = [
  Heading.configure({
    levels: [1, 2],
  }),
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false,
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false,
    },
  }),
  Placeholder.configure({
    placeholder: "Start typing here...",
  }),
  ImageResize,
];

const content = ``;

const TipTapChatBar = ({
  setEditorRef,
  onEnter,
  disableEnter,
  overrideMobile,
  customEditorHeight,
}) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const extensionsFiltered = extensions;
  const editorRef = useRef(null);
  const setEditorRefFunc = (editorInstance) => {
    editorRef.current = editorInstance;
    setEditorRef(editorInstance);
  };

  const handleBlur = () => {
    const htmlContent = editorRef.current.getHTML();
    if (!htmlContent?.trim() || htmlContent?.trim() === "<p></p>") {
      // Set focus state based on content
    }
  };

  return (
    <>
    <button onClick={() => {
      console.log(editorRef.current.getHTML());
    }}>Test</button>
    <EditorProvider
      immediatelyRender={false}
      slotBefore={
        (!isMobile || overrideMobile) && (
          <MenuBar setEditorRef={setEditorRefFunc} />
        )
      }
      extensions={extensionsFiltered}
      content={content}
      onCreate={({ editor }) => {
        editor.on("blur", handleBlur); // Listen for blur event
      }}
      onUpdate={({ editor }) => {
      editor.on('blur', handleBlur);     // Ensure blur is updated
    }}
      editorProps={{
        attributes: {
          class: "tiptap-prosemirror",
          style: `
          overflow: auto;         /* Enable scroll if content overflows */
          max-height: 400px;      /* Set a max height for the container */
          padding: 20px;          /* Optional: Add padding inside the container */
          border: 1px solid #ddd; /* Optional: Add a border for clarity */
          border-radius: 5px;
        `,
        },
        handleKeyDown(view, event) {
          if (!disableEnter && event.key === "Enter") {
            if (event.shiftKey) {
              view.dispatch(
                view.state.tr.replaceSelectionWith(
                  view.state.schema.nodes.hardBreak.create()
                )
              );
              return true;
            } else {
              if (typeof onEnter === "function") {
                onEnter();
              }
              return true;
            }
          }
          return false;
        },
      }}
    />
    </>
  );
};

export default TipTapChatBar;