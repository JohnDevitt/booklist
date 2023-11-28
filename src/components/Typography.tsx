interface Props {
  children: string;
}

export const PageTitle: React.FC<Props> = ({ children }) => (
  <h1 className="font-mono text-4xl py-5">{children}</h1>
);

export const BookTitle: React.FC<Props> = ({ children }) => (
  <p className="font-mono font-bold	">{children}</p>
);

export const AuthorName: React.FC<Props> = ({ children }) => (
  <p className="font-mono italic">{children}</p>
);
