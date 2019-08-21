import Faker from 'faker';

class FakePost {
  constructor(){
    this.id = Faker.random.uuid();
    this.user = {
      username: Faker.internet.userName(),
      profile_pic: Faker.internet.avatar()
    }
    this.image = {
      url: Faker.image.image()
    };
    this.caption = Faker.lorem.sentences();
    this.likes = [];
    this.comments = [];

    this.generateLikes();
    this.generateComments();

  }

  generateLikes = (maxLikes = 10) => {
    const numberLikes = Math.floor(Math.random() * maxLikes) + 1;
    for (let i = 0; i <= numberLikes; i++) {
      console.log(`${i} likes`)
      this.likes.push({
        username: Faker.internet.userName(),
        profile_pic: Faker.internet.avatar()
      })
    }
  }
  generateComments = (maxComments = 3) => {
    const numberLikes = Math.floor(Math.random() * maxComments) + 1;
    for (let i = 0; i <= numberLikes; i++) {
      console.log(`${i} comments`)
      this.comments.push({
        id: Faker.random.uuid(),
        text: Faker.lorem.sentence(),
        username: Faker.internet.userName(),
        profile_pic: Faker.internet.avatar()
      })
    }
  }
}

export default FakePost;
