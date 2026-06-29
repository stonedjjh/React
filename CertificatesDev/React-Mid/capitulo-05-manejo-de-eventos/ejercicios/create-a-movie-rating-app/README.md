---
difficulty: 1
chapter: "Chapter 5: Event Handling"
training: true
tags: react
---

# Create a Movie Form

## Challenge Description

Time to build the foundation for your Movie Rating App! 🎬 You'll be creating a movie form that collects movie information from users. This challenge focuses on uncontrolled forms, [`FormData`](https://developer.mozilla.org/en-US/docs/Web/API/FormData) handling, and preparing for future CRUD operations.

Your task is to create a movie form that gathers movie information from users and processes that data appropriately. For now, we're just collecting and logging the data - in future challenges, we'll use this form to actually add and edit movies.

You'll see a `Modal` component in `components/ui/Modal.jsx` that displays the form using its `children` prop. For now, the modal remains open at all times - in future challenges, we'll implement the logic to open and close the modal.

## Requirements

- Add the functionality the existing `MovieForm` component in `components/MovieForm.jsx`
- The form component should receive a `movie` prop, which can be `null` or an object representing a movie
- The form should expose an `onSave` and an `onCancel` prop to handle form submission and cancellation
- The form should allow users to enter:
  - Movie name
  - Movie description
  - Image URL for the movie poster
  - One or more genres from a selection
  - Whether the movie is currently in theaters
- On form submission, console log the movie data from the `App.jsx` file
- On cancel button click, console log "cancel" from the `App.jsx` file
- Support both adding new movies and editing existing ones (display current values if a movie is provided)

Here is an example of a console log output when submitting the form:

```json
{
  "name": "Inception",
  "description": "A mind-bending thriller",
  "imageUrl": "https://m.media-amazon.com/images/M/XXX.jpg",
  "genres": ["Sci-Fi", "Thriller"],
  "inTheaters": true
}
```

> 💡 HINT: You can test edit functionality by changing `currentMovie` in App.jsx to one of the movies from the list
>
> 💡 HINT: Use `defaultValue` for text inputs and `defaultChecked` for checkboxes to set initial values for editing a movie
>
> 💡 HINT: Use FormData `getAll` method to retrieve all selected genres from the form

## Other Considerations

- TailwindCSS is preinstalled with the default config. It might be helpful for you, if you want to have some styles. (Not obligatory)
- 👀 Don't peek at the solution until you've solved the exercise yourself or exhausted your resources. Challenging yourself will best prepare you for the exam.

## Example of Finished App

This is an example of what the functionality should look like for the completed exercise. If you'd like to mimic this style, feel free to do so, but it is not required.

![Screenshot of the finished app](https://api.certificates.dev/repositories/assets/UmVhY3QtQ2VydGlmaWNhdGlvbi9sMi10cmFpbmluZy1jb2RlLWNoYWxsZW5nZS1jaGFwdGVyLTUvc2NyZWVuc2hvdC5wbmc=)
