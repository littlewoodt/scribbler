# == Schema Information
#
# Table name: pictures
#
#  id         :integer          not null, primary key
#  picture    :text
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  user_id    :integer
#

class Picture < ActiveRecord::Base
	belongs_to :user
end
