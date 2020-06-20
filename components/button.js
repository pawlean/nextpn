function Button(props) {
  return (
    <div>
      <a
        href={props.buttonLink}
        className="button"
        target="_blank"
        aria-describedby="new-window-1"
        rel="noopener"
      >
        View more &#187;
      </a>
      <style jsx>
        {`
          .button {
            display: inline-block;
            text-decoration: none;
            padding: 15px;
            margin: 20px;
            border-radius: 5px;
            background-color: #a47da4;
            color: #fff;
            border-bottom: 0px;
          }

          .button:hover {
            background-color: #836883;
            text-decoration: underline;
            border-bottom: 0px;
            color: #fff;
          }
        `}
      </style>
    </div>
  );
}

export default Button;
