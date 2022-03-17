<template>
  <form>
    <div class="form-control">
      <label for="user-name">Your Name</label>
      <input type="text" id="uesr-name" name="user-name" />
    </div>
    <div class="form-control">
      <label for="age">Your Age (Years)</label>
      <input type="text" id="age" name="age" />
    </div>
    <div class="form-control">
      <label for="referrer">How did you hear about us ?</label>
      <select name="referrer" id="referrer">
        <option value="google">Google</option>
        <option value="wom">Word of Mouth</option>
        <option value="newspaper">Newspaper</option>
      </select>
    </div>
    <div class="form-control">
      <h2>What are you interested in ?</h2>
      <div>
        <input type="checkbox" id="interest-news" name="interest" />
        <label for="interest-news">News</label>
      </div>
      <div>
        <input type="checkbox" id="interest-tutorials" name="interest" />
        <label for="interest-tutorials">Tutorials</label>
      </div>
      <div>
        <input type="checkbox" id="interest-nothing" name="interest" />
        <label for="interest-nothing">Nothing</label>
      </div>
    </div>
    <div class="form-control">
      <h2>How do you learn ?</h2>
      <div>
        <input type="radio" id="how-video" name="how" />
        <label for="how-video">Video Courses</label>
      </div>
      <div>
        <input type="radio" id="how-blogs" name="how" />
        <label for="how-blogs">Blogs</label>
      </div>
    </div>
    <div>
      <button>Save Data</button>
    </div>
  </form>
</template>

<style scoped>
form {
  margin: 2rem auto;
  max-width: 40rem;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 2rem;
  background-color: #ffffff;
}
.form-control {
  margin: 0.5rem 0;
}
label {
  font-weight: bold;
}
h2 {
  font-size: 1rem;
  margin: 0.5rem 0;
}
input,
select {
  display: block;
  width: 100%;
  font: inherit;
  margin-top: 0.5rem;
}
select {
  width: auto;
}
input[type="checkbox"],
input[type="radio"] {
  display: inline-block;
  width: auto;
  margin-right: 1rem;
}
input[type="checkbox"] + label,
input[type="radio"] + label {
  font-weight: normal;
}
button {
  font: inherit;
  border: 1px solid #0076bb;
  background-color: #0076bb;
  color: white;
  cursor: pointer;
  padding: 0.75rem 2rem;
  border-radius: 30px;
}
button:hover,
button:active {
  border-color: #002350;
  background-color: #002350;
}
</style>
