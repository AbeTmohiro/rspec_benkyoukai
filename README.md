# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* How to use this repository?
## 再度実行する場合は以下を実施
```
$ cd ~/projects
$ rm -rf rspec_benkyoukai
```
## git clone
```
$ cd ~/projects
$ git clone https://github.com/AbeTmohiro/rspec_benkyoukai.git
$ cd rspec_benkyoukai
```
## db:create
```
$ rails db:create
$ rails db:migrate
```
### DB作成中に以下のエラーが出た場合、下記を実行
```
error Found 1 errors.     

 Your Yarn packages are out of date!
 Please run `yarn install --check-files` to update.
```

↓↓↓↓
```
$ yarn install --check-files
$ rails db:migrate
```
## bundle install
```
$ rm gemfile.lock
$ bundle install
```

## rspec実行
```
$ bundle exec rspec
#→エラーが出ればOK
```

* Ruby version

* System dependencies

* Configuration

* Database creation
## groupsテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,unique: true|

### Association
- has_many :group_users
- has_many :users,through: :group_users
- has_many :messages

## group_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル
|Column|Type|Options|
|------|----|-------|
|name|string|null: false,index: true|

### Association
- has_many :messages
- has_many :group_users
- has_many :groups,through: :group_users

## messagesテーブル
|Column|Type|Options|
|------|----|-------|
|content|text|
|image|string|
|user|references|null: false, foreign_key: true|
|group|references|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...
