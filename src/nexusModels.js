import { objectType } from 'nexus'

const User = objectType({
    name: 'User',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.Name()
        t.model.displayName()
        t.model.email()
        t.model.dob()
        t.model.phone()
        t.model.location()
        t.model.bio()
        t.model.preferences()
        t.model.posts()
        t.model.followers()
        t.model.following()
    }
})

const Post = objectType({
    name: 'Post',
    definition(t) {
        t.model.id()
        t.model.createdAt()
        t.model.updatedAt()
        t.model.author()
        t.model.textContent()
        t.model.mediaURL()
        t.model.interactions()
        t.model.published()
    }
})

export const Models = [
    User,
    Post
]