import React from 'react';

type Props = {
  name: string,
  onClick: (e: SyntheticEvent<HTMLButtonElement>) => undefined
};

export default function Button({ name, onClick }: Props) {
  return (
    <button type="button" className="button" onClick={onClick}>
      {name}
    </button>
  );
}
