export const checkValidity = (e: Event) => {
  const target = e.target;
  if (
    target instanceof HTMLInputElement ||
    target instanceof HTMLButtonElement ||
    target instanceof HTMLTextAreaElement ||
    target instanceof HTMLSelectElement
  ) {
    if (target.form) {
      console.log('validity', target.form.checkValidity());
    }
  }
  // const target = e.target as HTMLElement;
  // if (target.form) {
  //   console.log('validity', target, target.form.checkValidity());
  // }
  // if (e.currentTarget instanceof HTMLFormElement) {
  //   console.log('validity', e.target, e.target?.form.checkValidity());
  // }
};
//: React.FormEvent<HTMLFormElement>
